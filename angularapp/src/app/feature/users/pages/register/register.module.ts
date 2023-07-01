import { NgModule } from '@angular/core';

import { MaterialModule } from 'src/app/shared/material.module';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MaterialModule, CommonModule],
  exports: [RegisterComponent],
  declarations: [RegisterComponent],
  providers: [],
})
export class RegisterModule { }
