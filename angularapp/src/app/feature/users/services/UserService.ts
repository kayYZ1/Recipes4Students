import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from 'src/app/core/models/User';

@Injectable({providedIn: 'root'})

export class UserService {
  constructor(private _http: HttpClient) { }
  

  userRegister(values: any) {
    return this._http.post("http://localhost:5200/Auth/register", values)
  }
}