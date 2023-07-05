import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromAuth from "../../../../core/state/auth/auth.state"
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent {
  constructor(private _store: Store<fromAuth.State>, private router: Router) {}
  buttonDisabled = true  

  newRecipeForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    imageURL: new FormControl('', Validators.required),
    recipeURL: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.newRecipeForm.valueChanges.subscribe(() => {
      this.buttonDisabled = this.newRecipeForm.invalid
    })
  }
}
