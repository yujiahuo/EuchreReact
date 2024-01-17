import React, { Component } from 'react';
import Card from '../models/Card';
import '../styles/cardSprites.css';

type CardComponentProps = {
  cardId: string;
}

type CardComponentState = {
  cardId: string,
  zIndex: number,
  cardLocation: null
}

class CardComponent extends Component<CardComponentProps> {
  state:CardComponentState = {
    cardId: this.props.cardId,
    zIndex: 1,
    cardLocation: null
  };

  render() {
    return (
      <div id={this.state.cardId} className="card">
      
      </div>
    )
  }
}

export default CardComponent;

