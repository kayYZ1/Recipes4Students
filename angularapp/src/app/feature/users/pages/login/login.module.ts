import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MaterialModule, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule { }
