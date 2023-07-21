import { Component } from '@angular/core';
import {map, Observable} from "rxjs";
import {AuthState} from "../../shared/states/types/AuthState";
import {selectUser} from "../../shared/states/auth.selector";
import {logout} from "../../shared/states/auth.actions";
import {Store} from "@ngrx/store";
import {spliterEmail} from "../../shared/utils/spliterEmail";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  email$: Observable<string | undefined>;

  constructor(
    private store: Store<AuthState>
  ) {
    this.email$ = this.store.select(selectUser).pipe(map(
      val => spliterEmail(
        val?.email || "")));
  }
}
