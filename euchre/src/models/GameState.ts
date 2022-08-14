import Player from '../models/Player';
import Card from '../models/Card';
import { BidResult } from '../models/BidResult';
import { PlayStage } from '../constants/GameEnums';
import { Suit } from '../constants/CardEnums';

type GameState = {
    players: Player[],
    nsScore: number,
    ewScore: number,
    gameStage: PlayStage,
    numHandsPlayed: number,
    handDealer: Player,
    trumpCandidate: Suit,
    bidResult: BidResult,
    nsTricksWon: number,
    ewTricksWon: number,
    trickLeadCard: Card,
    trickLeadPlayer: Player,
    trickPlayedCards: Card[],
    currentPlayer: Player
}