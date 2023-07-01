import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/UserService';

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
    passwordHash: new FormControl("", [Validators.required, Validators.minLength(8)]),
    index: new FormControl(0, [Validators.required, Validators.min(5)]),
    field: new FormControl(this.fields[0], Validators.required)
  })

  onSubmit() {
    this._userService.userRegister(this.registerGroup.value).subscribe((response: any) => {
      console.log("Registration succesfull", response)
    }), (error: any) => {
      console.log("fail", error)
      this.error = error.response.data
    }
  }
}
