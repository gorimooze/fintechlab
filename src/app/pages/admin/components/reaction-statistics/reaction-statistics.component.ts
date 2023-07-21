import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ReactionStatisticInterface} from "../../interfaces/reaction-statistic.interface";
import {ProfileReactionsService} from "../../services/profile-reactions.service";

@Component({
  selector: 'app-reaction-statistics',
  templateUrl: './reaction-statistics.component.html',
  styleUrls: ['./reaction-statistics.component.scss']
})
export class ReactionStatisticsComponent implements OnInit {
  @Input() materialIconType: string = "code";
  @Input() iconBackgroundColor: string = "#000";
  @Input() reactionName: string = "Statistics"
  @Input()propertyName!: string;

  reaction$!: Observable<ReactionStatisticInterface>;

  constructor(private reactionsService: ProfileReactionsService) {}

  ngOnInit() {
    this.reaction$ = this.reactionsService.getReactionStatisticsForUser(this.propertyName);
  }
}
