import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewRecipeComponent } from './new-recipe.component';

import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [],
  declarations: [NewRecipeComponent],
  providers: [],
})

export class NewRecipeModule { }
