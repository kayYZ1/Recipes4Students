import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from "@ngrx/store"
import * as AuthActions from "../../../../core/state/auth/auth.actions"

import { UserService } from '../../services/UserService';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent {
  constructor(private store: Store) {}
  error = false;
  hide = true;
  buttonDisabled = true

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(() => {
      this.buttonDisabled = this.loginForm.invalid
    })
  }

  onSubmit() {
    console.log(this.loginForm.value);
    const credentials = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }

    this.store.dispatch(AuthActions.login({ credentials }))

    /*this._userService.userLogin(this.loginForm.value as UserLogin).subscribe((response: any) => {
      console.log("Login succesfull")
    }, (error: any) => {
      this.error = error.error;
    })
  */}
}
