import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as fromAuth from "../app/core/state/auth/auth.state"
import * as AuthActions from "../app/core/state/auth/auth.actions"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';

  constructor(private _store: Store<fromAuth.State>, private router: Router){}
  
  jwtToken$ = this._store.select(fromAuth.selectToken);
  user$ = this._store.select(fromAuth.selectUser);

  onClick() {
    this._store.dispatch(AuthActions.logout())
    this.router.navigateByUrl("/")
  }
}
