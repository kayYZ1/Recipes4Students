import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/users/pages/login/login.component';
import { RegisterComponent } from './feature/users/pages/register/register.component';
import { NewRecipeComponent } from './feature/recipes/pages/new-recipe/new-recipe.component';
import { AllRecipesComponent } from './feature/recipes/pages/all-recipes/all-recipes.component';

const routes: Routes = [
  {path: "", component: AllRecipesComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "new-recipe", component:  NewRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
