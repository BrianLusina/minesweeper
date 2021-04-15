/* eslint-disable react/prop-types */
/* eslint-disable react/sort-comp */
/* eslint-disable consistent-return */

import React, { Component } from 'react';
import swal from 'sweetalert2';
import Cell from '../cell';
import {
  createEmptyArray,
  getMines,
  plantMines,
  getNeighbours,
  getFlags,
  getHidden,
  revealEmpty,
} from '../../utils/gameutils';
import './board.scss';
import { CellData } from '../../types';

interface Props {
  width: number;
  height: number;
  mines: number;
}

interface State {
  width: number;
  height: number;
  mines: number;
  boardData: CellData[][];
  gameStatus: string;
}

/**
 * Board component is responsible for rendering the board is is aware of the game status:
 * Number of mines, yet to be found, whether the game has been won or not and knows which cell
 * has a mine or not
 */
export default class Board extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      mines: 0,
      boardData: [],
      gameStatus: 'Game in Progress',
    };

    this.revealBoard = this.revealBoard.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    const { mines, height, width } = nextProps;

    if (mines !== prevState.mines || height !== prevState.height || width !== prevState.width) {
      return {
        ...prevState,
        mines,
        height,
        width,
      };
    }
    return null;
  }

  /**
   * Reveals the whole board
   */
  revealBoard() {
    const { boardData } = this.state;

    const data = boardData.map((datarow) => {
      return datarow.map((dataitem) => {
        dataitem.isRevealed = true;
        return dataitem;
      });
    });

    this.setState({
      boardData: data,
    });
  }

  handleContextMenu(e: Event, x: number, y: number) {
    e.preventDefault();
    const { boardData } = this.state;

    const updatedData = boardData;
    let { mines } = this.state;

    // check if already revealed
    if (updatedData[x][y].isRevealed) return;

    if (updatedData[x][y].isFlagged) {
      updatedData[x][y].isFlagged = false;
      mines += 1;
    } else {
      updatedData[x][y].isFlagged = true;
      mines -= 1;
    }

    if (mines === 0) {
      const mineArray = getMines(updatedData);
      const FlagArray = getFlags(updatedData);
      if (JSON.stringify(mineArray) === JSON.stringify(FlagArray)) {
        this.setState({ mines: 0, gameStatus: 'You Win.' });
        this.revealBoard();
        swal('Awesome', 'You Win', 'success');
      }
    }

    this.setState({
      boardData: updatedData,
      mines,
    });
  }

  componentDidMount() {
    const { height, width, mines } = this.props;
    let boardData = createEmptyArray(height, width);
    boardData = plantMines(boardData, height, width, mines);
    boardData = getNeighbours(boardData, height, width);

    this.setState({
      boardData,
    });
  }

  // eslint-disable consistent-return
  handleCellClick(x: number, y: number) {
    const { boardData } = this.state;
    const { mines, height, width } = this.props;

    // check if revealed. return if true.
    if (boardData[x][y].isRevealed || boardData[x][y].isFlagged) return null;

    // check if mine. game over if true
    if (boardData[x][y].isMine) {
      this.setState({ gameStatus: 'You Lost.' });
      this.revealBoard();
      swal('Oh noes!', 'You lost', 'error');
    }

    let updatedData = boardData;
    updatedData[x][y].isFlagged = false;
    updatedData[x][y].isRevealed = true;

    if (updatedData[x][y].isEmpty) {
      updatedData = revealEmpty(x, y, height, width, updatedData);
    }

    if (getHidden(updatedData).length === mines) {
      this.setState({ mines: 0, gameStatus: 'You Win.' });
      this.revealBoard();
      swal('Awesome', 'You Win', 'success');
    }

    this.setState({
      boardData: updatedData,
      mines: mines - getFlags(updatedData).length,
    });
  }

  render() {
    const { boardData, mines, gameStatus } = this.state;
    return (
      <div className="board">
        <div className="game-info">
          <span className="info">Mines remaining: {mines}</span>
          <h1 className="info">{gameStatus}</h1>
        </div>

        {boardData.map((datarow) => {
          return datarow.map((dataitem) => {
            const { x, y } = dataitem;
            return (
              <div key={x * datarow.length + y}>
                <Cell
                  onClick={() => this.handleCellClick(x, y)}
                  onCtxMenu={(e: Event) => this.handleContextMenu(e, x, y)}
                  value={dataitem}
                />
                {datarow[datarow.length - 1] === dataitem ? <div className="clear" /> : ''}
              </div>
            );
          });
        })}
      </div>
    );
  }
}

// Board.propTypes = {
//   mines: number,
//   height: number,
//   width: number,
// };
