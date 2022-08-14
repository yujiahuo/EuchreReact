import React, { Component } from 'react';
import { Suit, Rank } from '../constants/CardEnums';
import '../styles/cardSprites.css';

type CardProps = {
  suit: Suit,
  rank: Rank
}

type CardState = {
  suit: Suit,
  rank: Rank,
  cardName: string,
  zIndex: number
}

class CardComponent extends Component<CardProps> {
  state:CardState = {
    suit: this.props.suit,
    rank: this.props.rank,
    cardName: Suit[this.props.suit] + this.props.rank,
    zIndex: 1
  };

  render() {
    return (
      <div id={this.state.cardName} className="card">
      
      </div>
    )
  }

  public changeRankSuit(newSuit: Suit, newRank: Rank) {
    this.setState(( {
        suit: newSuit,
        rank: newRank,
        cardName: this.state.cardName
    }))
  }
}

export default CardComponent;

