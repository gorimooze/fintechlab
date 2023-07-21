import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {UserInterface} from "../../pages/login/interfaces/User.inteface";
import {HttpClient} from "@angular/common/http";
import {AuthState} from "../states/types/AuthState";
import {Store} from "@ngrx/store";
import {getSavedUser} from "../utils/getSavedUser";
import {EmailInterface} from "../../pages/login/interfaces/email.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _httpClient: HttpClient, private _store: Store<AuthState>) {
  }

  isAuthorized(): boolean {
    return !!getSavedUser();
  }

  authenticate(credentials: UserInterface): Observable<EmailInterface> {
    return of({email: credentials.email});
  }
}
