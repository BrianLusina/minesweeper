import { CellData } from '../types';

/**
 * Get a random number given a dimenstion
 * @param {Number} dimension
 */
export function getRandomNumber(dimension: number): number {
  return Math.floor(Math.random() * 1000 + 1) % dimension;
}

/**
 * Creates a 2D array and each cell data[x][y] with default attributes
 * @param {Number} height height of the board
 * @param {Number} width width of the board
 * @returns {Array}
 */
export function createEmptyArray(height: number, width: number): CellData[][] {
  const data: CellData[][] = [];
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
}

// get mines
export function getMines(data: CellData[][]): CellData[] {
  const mineArray: CellData[] = [];

  data.forEach((datarow) => {
    datarow.forEach((dataitem) => {
      if (dataitem.isMine) {
        mineArray.push(dataitem);
      }
    });
  });

  return mineArray;
}

/**
 * Randomly plants mines on the board and assigns the cells with mines an attribute of isMine
 * @param {Array} data Initial Array of cells,
 * @param {Number} height Height of the board
 * @param {Number} width width of the board
 * @param {Number} mines Number of mines to plant
 * @returns {Array} Returns the array cells, with randomly planted mines
 */
export function plantMines(
  data: CellData[][],
  height: number,
  width: number,
  mines: number,
): CellData[][] {
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
}

/**
 * Looks for neighboring cells of a given cell and returns them. Takes in the X and Y coordinates of the
 * given cell and a data array of the given board
 * @param {Number} x X coordinate
 * @param {Number} y Y coordinate
 * @param {Array} data
 * @returns {Array}
 */
export function traverseBoard(
  x: number,
  y: number,
  height: number,
  width: number,
  data: CellData[][],
): CellData[] {
  const result = [];

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
}

/**
 * Get the number of neighboring mines of each board cell
 * processes every cell which is not a mine, get its surrounding cells, calculate the number of surrounding
 * cells that are mines and updates neighbour attribute of that cell with the total number of mines.
 * @param {Array} data
 * @param {Number} height
 * @param {Number} width
 * @returns {Array}
 */
export function getNeighbours(data: CellData[][], height: number, width: number): CellData[][] {
  const updatedData = data;

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const cell = data[i][j];

      // if it is not a mine
      if (!cell.isMine) {
        let mines = 0;
        // traverse the board and get the neighboring cells
        const area = traverseBoard(cell.x, cell.y, height, width, data);

        area.forEach((value) => {
          if (value.isMine) {
            mines += 1;
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
}

// get Flags
export function getFlags(data: CellData[][]): CellData[] {
  const mineArray: CellData[] = [];

  data.forEach((datarow) => {
    datarow.forEach((dataitem) => {
      if (dataitem.isFlagged) {
        mineArray.push(dataitem);
      }
    });
  });

  return mineArray;
}

// get Hidden cells
export function getHidden(data: CellData[][]): CellData[] {
  const mineArray: CellData[] = [];

  data.forEach((datarow) => {
    datarow.forEach((dataitem) => {
      if (!dataitem.isRevealed) {
        mineArray.push(dataitem);
      }
    });
  });

  return mineArray;
}

/**
 * Reveal empty logic for empty cells
 */
export function revealEmpty(
  x: number,
  y: number,
  height: number,
  width: number,
  data: CellData[][],
): CellData[][] {
  const area = traverseBoard(x, y, height, width, data);
  area.forEach((value) => {
    if (!value.isFlagged && !value.isRevealed && (value.isEmpty || !value.isMine)) {
      data[value.x][value.y].isRevealed = true;
      if (value.isEmpty) {
        revealEmpty(value.x, value.y, height, width, data);
      }
    }
  });
  return data;
}
