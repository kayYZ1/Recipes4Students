import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { AllRecipesComponent } from './pages/all-recipes/all-recipes.component';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';

@NgModule({
  declarations: [NewRecipeComponent, AllRecipesComponent],
  imports: [CommonModule, MatDividerModule, MatGridListModule, MatCardModule],
  exports: [AllRecipesComponent],
})
export class RecipesModule {}
