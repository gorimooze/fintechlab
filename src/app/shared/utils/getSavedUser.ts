import {browserStorage} from "./browserStorage";
import {EmailInterface} from "../../pages/login/interfaces/email.interface";

export const getSavedUser = (): EmailInterface | null => {
  let emailClaim = localStorage.getItem(browserStorage.email);

  return emailClaim ? { email: emailClaim } : null;
}
