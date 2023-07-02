import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/UserService';

import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent {
  constructor(private _userService: UserService) {}

  fields = ["Informatyka", "Automatyka i Robotyka", "Elektrotechnika", "Inzynieria Odnawialna"]
  hide = true
  error = false

  registerGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    username: new FormControl("", Validators.required),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    index: new FormControl(0, [Validators.required, Validators.min(5)]),
    field: new FormControl(this.fields[0], Validators.required)
  })

  onSubmit() {
    console.log(this.registerGroup.value)
    this._userService.userRegister(this.registerGroup.value as User).subscribe((response: any) => {
      console.log("Registration succesfull", response)
    }, (error: any) => {
      this.error = error.error;
    })
    this.registerGroup.reset()
  }
}
