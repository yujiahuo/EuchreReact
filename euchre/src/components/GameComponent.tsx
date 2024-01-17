import React, { Component } from 'react';
import { Suit, Rank } from '../constants/CardEnums';
import CardComponent from './CardComponent';
import  GameState from '../models/GameState'
import Card from '../models/Card';

type GameProps = {

}

class GameComponent extends Component<GameProps> {
  state:GameState = new GameState();

  render() {
    let card = new Card(Suit.Diamonds, Rank.Jack);

    return (
      <>
        <CardComponent cardId={card.id} />
      </>
    )
  }
}

export default GameComponent;