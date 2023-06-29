import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllRecipesComponent } from './all-recipes.component';

import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  imports: [MaterialModule, CommonModule],
  exports: [],
  declarations: [AllRecipesComponent],
  providers: [],
})
export class AllRecipesModule { }
