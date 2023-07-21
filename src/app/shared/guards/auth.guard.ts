import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthService,private _router : Router) {

  }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    if(this._authService.isAuthorized()) {
      return true;
    }

    this._router.navigateByUrl("/");
    return false;
  }
}
