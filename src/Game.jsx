import React, { Component } from 'react';
import './styles/game.scss';
import Board from "./Board"

/**
 * Entry point to the game. This stores the width and height of the game, along with the number of mines
 * in its state, this is later on passed to the Board as props
 */
class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      height: 8,
      width: 8,
      mines: 10
    }
  }

  render() {
    const { height, width, mines} = this.state
    return (
      <div className="game">
        <Board height={height} width={width} mines={mines}/>
      </div>
    );
  }
}

export default Game;
