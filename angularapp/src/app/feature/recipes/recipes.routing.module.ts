import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllRecipesComponent } from './pages/all-recipes/all-recipes.component';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';

export const routes: Routes = [
  { path: "", component: AllRecipesComponent },
  { path: "new-recipe", component: NewRecipeComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllRecipesRoutingModule { }