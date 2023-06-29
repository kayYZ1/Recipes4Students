import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRecipeComponent } from './pages/new-recipe/new-recipe.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [NewRecipeComponent],
  imports: [CommonModule, MatDividerModule, MatGridListModule, MatCardModule],
  exports: [MatDividerModule, MatGridListModule, MatCardModule]
})
export class RecipesModule {}
