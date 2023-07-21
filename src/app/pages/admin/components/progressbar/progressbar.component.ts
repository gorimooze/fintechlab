import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ProfileReactionsService} from "../../services/profile-reactions.service";
import {TargetPercentageInterface} from "../../interfaces/target-percentage.interface";

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit {
  @Input() propertyName!: string;
  percentage$!: Observable<TargetPercentageInterface>;

  constructor(private reactionService: ProfileReactionsService) {}

  ngOnInit() {
    this.percentage$ = this.reactionService.getTargetPercentageByPositionName(this.propertyName);
  }
}
