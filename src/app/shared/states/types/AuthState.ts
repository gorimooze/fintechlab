import {EmailInterface} from "../../../pages/login/interfaces/email.interface";

export interface AuthState {
  user: EmailInterface | null,
  isLoggedIn: boolean,
  loginError?: string,
  isLoginInProgress: boolean
}
