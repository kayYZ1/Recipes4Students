import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/users/pages/login/login.component';
import { RegisterComponent } from './feature/users/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/recipes/recipes.module').then((m) => m.RecipesModule),
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'new-recipe',
    loadChildren: () =>
      import('./feature/recipes/recipes.module').then((m) => m.RecipesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
