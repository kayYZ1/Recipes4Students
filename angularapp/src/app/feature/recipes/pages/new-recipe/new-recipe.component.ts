import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromAuth from "../../../../core/state/auth/auth.state"
import { isImageUrl, isRecipeUrlValid } from 'src/app/shared/utils/new-recipe-utils';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})

export class NewRecipeComponent {
  constructor(private _store: Store<fromAuth.State>) { }
  buttonDisabled = true

  newRecipeForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imageURL: new FormControl('',
      [Validators.required, isImageUrl()]),
    recipeURL: new FormControl('', [Validators.required, isRecipeUrlValid()]),
  });

  user$ = this._store.select(fromAuth.selectUser)

  ngOnInit() {
    this.newRecipeForm.valueChanges.subscribe(() => {
      this.buttonDisabled = this.newRecipeForm.invalid
    })
  }
}
