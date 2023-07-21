import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthState} from "../../../../shared/states/types/AuthState";
import {Store} from "@ngrx/store";
import {loginRequest} from "../../../../shared/states/auth.actions";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AuthState>) {

    this.form = this.formBuilder.group({
      email: new FormControl("demo@example.com", [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("12345678password", [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  signInButtonClicked(e: SubmitEvent) {
    e.preventDefault();
    this.store.dispatch(loginRequest(this.form.value));
  }
}
