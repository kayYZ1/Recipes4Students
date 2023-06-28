import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { AllRecipesComponent } from '../recipes/pages/all-recipes/all-recipes.component';

@NgModule({
  declarations: [MainPageComponent, AllRecipesComponent],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, MatTabsModule, MatListModule]
})
export class MainModule {}
