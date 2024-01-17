import { Suit } from '../constants/CardEnums'
import { Seat } from '../constants/GameEnums'

// "Next" in this case, is card-speak for the other suit of the same color
export function getNextSuit(suit: Suit){
	switch (suit) {
        case Suit.Clubs:
            return Suit.Spades;
        case Suit.Diamonds:
            return Suit.Hearts;
        case Suit.Hearts:
            return Suit.Diamonds;
        case Suit.Spades:
            return Suit.Clubs;
    }
}

export function nextSeat(currentSeat: Seat) {
    switch (currentSeat) {
        case Seat.South:
            return Seat.West;
        case Seat.West:
            return Seat.North;
        case Seat.North:
            return Seat.East;
        case Seat.East:
            return Seat.South;
    }
}