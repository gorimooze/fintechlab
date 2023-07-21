import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {UserService} from "../../../../shared/user/user.service";
import {UserModelInterface} from "../../../../shared/user/userModel.interface";

@Component({
  selector: 'app-meetings-card',
  templateUrl: './meetings-card.component.html',
  styleUrls: ['./meetings-card.component.scss']
})
export class MeetingsCardComponent {
  user$!: Observable<UserModelInterface>

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.user$ = this.userService.getUser();
  }
}
