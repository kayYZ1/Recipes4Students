import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})

export class NewRecipeComponent {
  newRecipeForm = {
    title: new FormControl("", Validators.required),
    description: new FormControl("", Validators.required),
    imageURL: new FormControl("", Validators.required),
    recipeURL: new FormControl("", Validators.required)
  }
}
