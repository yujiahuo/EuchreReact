import React, { Component } from 'react';
import { Suit, Rank } from '../constants/CardEnums';
import CardComponent from './CardComponent';

type GameProps = {

}

class Game extends Component<GameProps> {
    render() {
        return (
          <>
            <CardComponent suit={Suit.Spades} rank={Rank.King} />
          </>
        )
      }
}

export default Game;