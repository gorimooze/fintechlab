import {Observable, of} from "rxjs";
import {TargetPercentageInterface} from "../interfaces/target-percentage.interface";
import {AmountOfReactionInterface} from "../interfaces/amount-of-reaction.interface";
import {Injectable} from "@angular/core";
import {ReactionStatisticInterface} from "../interfaces/reaction-statistic.interface";
import {getRandomIntegerFromTo} from "../../../shared/utils/getRandomIntegerFromTo";

@Injectable({
  providedIn: 'root'
})
export class ProfileReactionsService {
  getReactionStatisticsForUser(reactionName: string): Observable<ReactionStatisticInterface> {
    let availableStates: AmountOfReactionInterface[] = ["same", "increase", "decrease"];

    return of({
      count: getRandomIntegerFromTo(30000, 50000),
      state: availableStates[getRandomIntegerFromTo(0, 2)],
      name: reactionName
    });
  }

  getTargetPercentageByPositionName(statisticsPositionName: string): Observable<TargetPercentageInterface> {
    return of({
      positionName: statisticsPositionName,
      percentage: getRandomIntegerFromTo(50, 95)
    });
  }
}
