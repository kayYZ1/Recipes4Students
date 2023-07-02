import { User } from '../../models/User';
import { createFeature, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { login, logout, loginFailure, loginSuccess } from './auth.actions';

export interface State {
  token: string | null;
  user: User | null;
}

export const initialState: State = {
  token: null,
  user: null,
};

const _authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { loginSuccessResponse }) => {
    return {
      ...state,
      token: loginSuccessResponse.token,
      user: loginSuccessResponse.user,
    };
  }),
  on(loginFailure, (state, { error }) => {
    return {
      ...state,
      loginError: error,
      token: null,
      user: null,
    };
  }),
  on(logout, (state) => {
    return {
      ...state,
      token: null,
      user: null,
    };
  })
);

export function authReducer(state: any, action: any) {
  return _authReducer(state, action);
}

export const selectAuthState = createFeatureSelector<State>("auth")

export const selectToken = createSelector(selectAuthState, (state) => state.token)
export const selectUser = createSelector(selectAuthState, (state) => state.user)