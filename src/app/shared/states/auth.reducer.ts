import {createReducer, on} from "@ngrx/store";
import {loginFailure, loginRequest, loginSuccess, logout} from "./auth.actions";
import {authStateInitial} from "./auth-state-initial";

export const authReducer = createReducer(authStateInitial,
  on(loginSuccess, (state, response) => {
    return {...state, user: response, isLoggedIn: true, isLoginInProgress: false}
  }),
  on(loginFailure, (state, response) => {
    return {...state, loginError: response.errorMessage, isLoggedIn: false, user: null, isLoginInProgress: false}
  }),
  on(loginRequest, (state) => {
    return {...state, isLoginInProgress: true}
  }),
  on(logout, (state) => {
    return {...state, isLoginInProgress: false, isLoggedIn: false, user: null, loginError: undefined}
  })
);
