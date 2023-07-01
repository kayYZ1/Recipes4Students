import { NgModule } from '@angular/core';

import { AllRecipesModule } from './pages/all-recipes/all-recipes.module';
import { AllRecipesRoutingModule } from './recipes.routing.module';
import { NewRecipeModule } from './pages/new-recipe/new-recipe.module';

@NgModule({
  declarations: [],
  imports: [AllRecipesModule, AllRecipesRoutingModule, NewRecipeModule],
  exports: [],
})
export class RecipesModule {}
