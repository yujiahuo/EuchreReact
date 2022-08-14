import { PlayStage } from '../constants/GameEnums';
import { Suit } from '../constants/CardEnums';
import Player from '../models/Player';

export interface BidResult {
	stage: PlayStage.BidRoundOne | PlayStage.BidRoundTwo; // TODO: Maybe not useful?
	trump: Suit;
	maker: Player;
	alone: boolean;
}