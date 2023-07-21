import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {UserModelInterface} from "./userModel.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userApiUrl: string = 'https://randomuser.me/api/'

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<UserModelInterface> {
    return this.http.get<any>(this.userApiUrl + '?results=1').pipe(map(val => val.results[0]));
  }
}
