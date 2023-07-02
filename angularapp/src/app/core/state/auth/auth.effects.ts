import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/feature/users/services/UserService';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, of, exhaustMap, map, tap } from 'rxjs';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      exhaustMap((action: any) =>
        this.userService
          .userLogin(action.credentials.email, action.credentials.password)
          .pipe(
            map((loginSuccessResponse) =>
              AuthActions.loginSuccess({ loginSuccessResponse })
            ),
            catchError((error) => of(AuthActions.loginFailure({ error })))
          )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ loginSuccessResponse }) => {
          this.router.navigateByUrl('/');
          alert(
            'Login Successful! ' +
              'Welcome, ' +
              loginSuccessResponse.user.username
          );
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}
}