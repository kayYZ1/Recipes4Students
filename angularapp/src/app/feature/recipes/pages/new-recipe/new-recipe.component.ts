import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import * as fromAuth from '../../../../core/state/auth/auth.state';
import {
  isImageUrl,
  isRecipeUrlValid,
} from 'src/app/shared/utils/new-recipe-utils';
import { Recipe } from 'src/app/core/models/Recipe';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent {
  constructor(private _store: Store<fromAuth.State>, private _http: HttpClient) {}
  buttonDisabled = true;
  user$ = this._store.select(fromAuth.selectUser);
  jwtToken$ = this._store.select(fromAuth.selectToken)

  username: string | null = null;
  index: number | null = null;
  token: string | null = null

  newRecipeForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imageURL: new FormControl('', [Validators.required, isImageUrl()]),
    recipeURL: new FormControl('', [Validators.required, isRecipeUrlValid()]),
    username: new FormControl({ value: '', disabled: true }),
    index: new FormControl({ value: 0, disabled: true }),
  });

  ngOnInit() {
    this.user$.subscribe((res) => {
      this.username = res?.username || null;
      this.index = res?.index || null;

      this.newRecipeForm.controls['username'].setValue(this.username);
      this.newRecipeForm.controls['index'].setValue(this.index);
    });

    this.jwtToken$.subscribe((res) => {
      this.token = res
    })

    this.newRecipeForm.valueChanges.subscribe(() => {
      this.buttonDisabled = this.newRecipeForm.invalid;
    });
  }

  onSubmit() {
    const formValue = {
      ...this.newRecipeForm.value,
      username: this.username,
      index: this.index,
    };

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      });
 
    const requestOptions = { headers: headers };

    this._http.post("http://localhost:5200/api/Recipes", formValue as Recipe, requestOptions).subscribe(res => {
      console.log(res)
    })
  }
}
