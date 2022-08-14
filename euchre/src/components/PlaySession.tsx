import React, { Component } from 'react';
import Game from './Game';
import Player from '../models/Player';
import Settings from '../models/Settings'


type PlaySessionState = {
    gameHistory: Game[],
    currentGame: Game,
    settings: Settings
}

class PlaySession extends Component {
    render() {
        return (
          null
        )
      }
}