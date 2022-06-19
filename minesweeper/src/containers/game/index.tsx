import React, { Component, ReactNode } from 'react';
import Board from '../../components/board';
import './game.scss';

interface State {
  height: number;
  width: number;
  mines: number;
}

/**
 * Entry point to the game. This stores the width and height of the game, along with the number of mines
 * in its state, this is later on passed to the Board as props
 */
export default class Game extends Component<Record<string, never>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      height: 8,
      width: 8,
      mines: 10,
    };
  }

  render(): ReactNode {
    const { height, width, mines } = this.state;
    return (
      <div className="game">
        <Board height={height} width={width} mines={mines} />
      </div>
    );
  }
}
