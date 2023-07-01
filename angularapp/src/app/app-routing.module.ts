import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./feature/users/users.module').then((u) => u.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
