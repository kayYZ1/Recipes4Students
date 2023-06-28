import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { AllRecipesComponent } from './pages/all-recipes/all-recipes.component';



@NgModule({
  declarations: [
    NewRecipeComponent,
    AllRecipesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipesModule { }
