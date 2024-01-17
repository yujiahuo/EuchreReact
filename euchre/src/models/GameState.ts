import Player from '../models/Player';
import Card from '../models/Card';
import { BidResult } from '../models/BidResult';
import { PlayStage } from '../constants/GameEnums';
import { Suit } from '../constants/CardEnums';

class GameState {
    players: Player[] | null;
    nsScore: number;
    ewScore: number;
    gameStage: PlayStage | null;
    numHandsPlayed: number;
    handDealer: Player | null;
    trumpCandidate: Suit | null;
    bidResult: BidResult | null;
    nsTricksWon: number;
    ewTricksWon: number;
    trickLeadCard: Card | null;
    trickLeadPlayer: Player | null;
    trickPlayedCards: Card[] | null;
    currentPlayer: Player | null;

    constructor(){
        this.players = null;
        this.nsScore = 0;
        this.ewScore = 0;
        this.gameStage = null;
        this.numHandsPlayed = 0;
        this.handDealer = null;
        this.trumpCandidate = null;
        this.bidResult = null;
        this.nsTricksWon = 0;
        this.ewTricksWon = 0;
        this.trickLeadCard = null;
        this.trickLeadPlayer = null;
        this.trickPlayedCards = null;
        this.currentPlayer = null;
    }
}

export default GameState;