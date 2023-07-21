import {AuthState} from "./types/AuthState";
import {getSavedUser} from "../utils/getSavedUser";

export const authStateInitial: AuthState = {
  isLoginInProgress: false,
  user: getSavedUser(),
  isLoggedIn: !!getSavedUser()
}
