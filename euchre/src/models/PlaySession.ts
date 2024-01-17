import Settings from '../models/Settings'
import GameState from '../models/GameState'

class PlaySession {
    nsGamesWon: number;
    ewGamesWon: number;
    totalNsScore: number;
    totalEwScore: number;
    gameHistory: GameState[] | null;
    currentGame: GameState | null;
    settings: Settings;

    constructor(settings: Settings){
      this.nsGamesWon = 0;
      this.ewGamesWon = 0;
      this.totalNsScore = 0;
      this.totalEwScore = 0;
      this.gameHistory = null;
      this.currentGame = null;
      this.settings = settings;
    }
}

export default PlaySession;