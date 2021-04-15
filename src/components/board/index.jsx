import React, { Component } from 'react';

import swal from 'sweetalert2';
import Cell from '../cell';
import { getRandomNumber } from '../../utils/gameutils';
import './board.scss';

/**
 * Board component is responsible for rendering the board is is aware of the game status:
 * Number of mines, yet to be found, whether the game has been won or not and knows which cell
 * has a mine or not
 */
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      mines: 0,
      boardData: [],
      gameStatus: 'Game in Progress',
    };

    this.initBoardData = this.initBoardData.bind(this);
    this.revealBoard = this.revealBoard.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
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
   * Initialize board data on mount and set the boardData
   */
  initBoardData() {
    const { height, width, mines } = this.props;
    let boardData = this.createEmptyArray(height, width);
    boardData = this.plantMines(boardData, height, width, mines);
    boardData = this.getNeighbours(boardData, height, width);

    this.setState({
      boardData,
    });
  }

  /**
   * Creates a 2D array and each cell data[x][y] with default attributes
   * @param {Number} height height of the board
   * @param {Number} width width of the board
   * @returns {Array}
   */
  createEmptyArray = (height, width) => {
    const data = [];
    for (let i = 0; i < height; i++) {
      data.push([]);
      for (let j = 0; j < width; j++) {
        data[i][j] = {
          x: i,
          y: j,
          isMine: false,
          neighbour: 0,
          isRevealed: false,
          isEmpty: false,
          isFlagged: false,
        };
      }
    }

    return data;
  };

  /**
   * Randomly plants mines on the board and assigns the cells with mines an attribute of isMine
   * @param {Array} data Initial Array of cells,
   * @param {Number} height Height of the board
   * @param {Number} width width of the board
   * @param {Number} mines Number of mines to plant
   * @returns {Array} Returns the array cells, with randomly planted mines
   */
  plantMines = (data, height, width, mines) => {
    let randomX;
    let randomY;
    let minesPlanted = 0;

    while (minesPlanted < mines) {
      randomX = getRandomNumber(width);
      randomY = getRandomNumber(height);
      const cell = data[randomX][randomY];

      // if this is not a mine
      if (!cell.isMine) {
        cell.isMine = true;
        minesPlanted += 1;
      }
    }
    return data;
  };

  /**
   * Get the number of neighboring mines of each board cell
   * processes every cell which is not a mine, get its surrounding cells, calculate the number of surrounding
   * cells that are mines and updates neighbour attribute of that cell with the total number of mines.
   * @param {Array} data
   * @param {Number} height
   * @param {Number} width
   * @returns {Array}
   */
  getNeighbours = (data, height, width) => {
    const updatedData = data;

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const cell = data[i][j];

        // if it is not a mine
        if (!cell.isMine) {
          let mines = 0;
          // traverse the board and get the neighboring cells
          const area = this.traverseBoard(cell.x, cell.y, data);

          area.forEach((value) => {
            if (value.isMine) {
              mines++;
            }
          });

          if (mines === 0) {
            updatedData[i][j].isEmpty = true;
          }

          updatedData[i][j].neighbour = mines;
        }
      }
    }

    return updatedData;
  };

  /**
   * Looks for neighboring cells of a given cell and returns them. Takes in the X and Y coordinates of the
   * given cell and a data array of the given board
   * @param {Number} x X coordinate
   * @param {Number} y Y coordinate
   * @param {Array} data
   * @returns {Array}
   */
  traverseBoard = (x, y, data) => {
    const result = [];
    const { height, width } = this.props;

    // up
    if (x > 0) {
      result.push(data[x - 1][y]);
    }

    // down
    if (x < height - 1) {
      result.push(data[x + 1][y]);
    }

    // left
    if (y > 0) {
      result.push(data[x][y - 1]);
    }

    // right
    if (y < width - 1) {
      result.push(data[x][y + 1]);
    }

    // top left
    if (x > 0 && y > 0) {
      result.push(data[x - 1][y - 1]);
    }

    // top right
    if (x > 0 && y < width - 1) {
      result.push(data[x - 1][y + 1]);
    }

    // bottom right
    if (x < height - 1 && y < width - 1) {
      result.push(data[x + 1][y + 1]);
    }

    // bottom left
    if (x < height - 1 && y > 0) {
      result.push(data[x + 1][y - 1]);
    }

    return result;
  };

  /**
   * Reveals the whole board
   */
  revealBoard() {
    const data = this.state.boardData.map((datarow) => {
      return datarow.map((dataitem) => {
        dataitem.isRevealed = true;
        return dataitem;
      });
    });

    this.setState({
      boardData: data,
    });
  }

  /**
   * Reveal empty logic for empty cells
   */
  revealEmpty = (x, y, data) => {
    const area = this.traverseBoard(x, y, data);
    area.forEach((value) => {
      if (!value.isFlagged && !value.isRevealed && (value.isEmpty || !value.isMine)) {
        data[value.x][value.y].isRevealed = true;
        if (value.isEmpty) {
          this.revealEmpty(value.x, value.y, data);
        }
      }
    });
    return data;
  };

  renderBoard = (data) => {
    return data.map((datarow) => {
      return datarow.map((dataitem) => {
        const { x, y } = dataitem;
        return (
          <div key={x * datarow.length + y}>
            <Cell
              onClick={() => this.handleCellClick(x, y)}
              onCtxMenu={(e) => this.handleContextMenu(e, x, y)}
              value={dataitem}
            />
            {datarow[datarow.length - 1] === dataitem ? <div className="clear" /> : ''}
          </div>
        );
      });
    });
  };

  handleCellClick(x, y) {
    // check if revealed. return if true.
    if (this.state.boardData[x][y].isRevealed || this.state.boardData[x][y].isFlagged) return null;

    // check if mine. game over if true
    if (this.state.boardData[x][y].isMine) {
      this.setState({ gameStatus: 'You Lost.' });
      this.revealBoard();
      swal('Oh noes!', 'You lost', 'error');
    }

    let updatedData = this.state.boardData;
    updatedData[x][y].isFlagged = false;
    updatedData[x][y].isRevealed = true;

    if (updatedData[x][y].isEmpty) {
      updatedData = this.revealEmpty(x, y, updatedData);
    }

    if (this.getHidden(updatedData).length === this.props.mines) {
      this.setState({ mines: 0, gameStatus: 'You Win.' });
      this.revealBoard();
      swal('Awesome', 'You Win', 'success');
    }

    this.setState({
      boardData: updatedData,
      mines: this.props.mines - this.getFlags(updatedData).length,
    });
  }

  handleContextMenu(e, x, y) {
    e.preventDefault();
    const updatedData = this.state.boardData;
    let { mines } = this.state;

    // check if already revealed
    if (updatedData[x][y].isRevealed) return;

    if (updatedData[x][y].isFlagged) {
      updatedData[x][y].isFlagged = false;
      mines++;
    } else {
      updatedData[x][y].isFlagged = true;
      mines--;
    }

    if (mines === 0) {
      const mineArray = this.getMines(updatedData);
      const FlagArray = this.getFlags(updatedData);
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

  // get mines
  getMines = (data) => {
    const mineArray = [];

    data.forEach((datarow) => {
      datarow.forEach((dataitem) => {
        if (dataitem.isMine) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  };

  // get Flags
  getFlags = (data) => {
    const mineArray = [];

    data.forEach((datarow) => {
      datarow.forEach((dataitem) => {
        if (dataitem.isFlagged) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  };

  // get Hidden cells
  getHidden = (data) => {
    const mineArray = [];

    data.forEach((datarow) => {
      datarow.forEach((dataitem) => {
        if (!dataitem.isRevealed) {
          mineArray.push(dataitem);
        }
      });
    });

    return mineArray;
  };

  render() {
    const { boardData, mines, gameStatus } = this.state;
    return (
      <div className="board">
        <div className="game-info">
          <span className="info">Mines remaining: {mines}</span>
          <h1 className="info">{gameStatus}</h1>
        </div>
        {this.renderBoard(boardData)}
      </div>
    );
  }

  componentDidMount() {
    this.initBoardData();
  }
}

// Board.propTypes = {
//   mines: number,
//   height: number,
//   width: number,
// };

export default Board;
