import { NgModule } from '@angular/core';

import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { UsersRoutingModule } from './users.routing.module';

@NgModule({
  declarations: [],
  imports: [LoginModule, RegisterModule, UsersRoutingModule],
})
export class UsersModule {}
