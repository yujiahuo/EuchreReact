import { Suit, Rank } from '../constants/CardEnums';
import * as helpers from '../helpers/coreHelpers'

class Card {
    suit: Suit;
    baseSuit: Suit;
    rank: Rank;
    baseRank: Rank;
    id: string;

    constructor(suit: Suit, rank: Rank){
        this.suit = suit;
        this.baseSuit = suit;
        this.rank = rank;
        this.baseRank = rank;
        this.id = Suit[suit] + rank;
    }

    public promoteBower(newRank: Rank.Left | Rank.Right){
        let newSuit: Suit;

        if (this.baseRank !== Rank.Jack) {
            throw console.error("Why you try to promote non-jack?");
        }

        if (newRank === Rank.Left){
            newSuit = helpers.getNextSuit(this.baseSuit);
        }
        else{
            newSuit = this.baseSuit;
        }

        this.changeSuitAndRank(newSuit, newRank);
    }

    private changeSuitAndRank(newSuit: Suit, newRank: Rank) {
        this.suit = newSuit;
        this.rank = newRank;
    }
}

export default Card;