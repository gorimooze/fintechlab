import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of, tap} from "rxjs";
import {loginFailure, loginRequest, loginSuccess, logout} from "./auth.actions";
import {browserStorage} from "../utils/browserStorage";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router) {}

  loginRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginRequest),
      exhaustMap((action) => {
          return this.authService.authenticate(action)
            .pipe(
              map((successfullResponse) => {
                  localStorage.setItem(browserStorage.email,successfullResponse.email);
                  return loginSuccess(successfullResponse)
                },
              ),
              catchError((error) => of(loginFailure(error))
              ));
        }
      )
    )
  );

  loginRedirect$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap((action) => this.router.navigateByUrl("/admin"))
  ), {dispatch: false});

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    tap((action) => {
      localStorage.removeItem(browserStorage.email);
      this.router.navigateByUrl("/");
    })
  ), {dispatch: false})
}
