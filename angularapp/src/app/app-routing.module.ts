import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './feature/main/pages/main-page/main-page.component';
import { LoginComponent } from './feature/users/pages/login/login.component';
import { RegisterComponent } from './feature/users/pages/register/register.component';
import { NewRecipeComponent } from './feature/recipes/pages/new-recipe/new-recipe.component';

const routes: Routes = [
  {path: "", component: MainPageComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "new-recipe", component:  NewRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
