import {createAction, props} from "@ngrx/store";
import {UserInterface} from "../../pages/login/interfaces/User.inteface";
import {AuthActionTypes} from "./types/AuthActionTypes";
import {EmailInterface} from "../../pages/login/interfaces/email.interface";

export const loginRequest = createAction(AuthActionTypes.LoginRequestOngoing, props<UserInterface>());

export const loginSuccess = createAction(AuthActionTypes.LoggedSuccessfully, props<EmailInterface>());

export const loginFailure = createAction(AuthActionTypes.LoggedFailure, props<{ errorMessage: string }>());

export const logout = createAction(AuthActionTypes.Logout);
