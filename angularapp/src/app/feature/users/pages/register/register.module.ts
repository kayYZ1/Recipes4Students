import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from 'src/app/shared/material.module';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [RegisterComponent],
  declarations: [RegisterComponent],
  providers: [],
})
export class RegisterModule { }
