import {AmountOfReactionInterface} from "./amount-of-reaction.interface";

export interface ReactionStatisticInterface {
  name: string;
  count: number;
  state: AmountOfReactionInterface
}
