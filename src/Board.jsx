import React, { Component } from 'react';
import { number } from "prop-types";
import "./styles/board.scss";

/**
 * Board component is responsible for rendering the board is is aware of the game status:
 * Number of mines, yet to be found, whether the game has been won or not and knows which cell
 * has a mine or not
 */
class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0,
            mines: 0,
            boardData: []
        }

        this.__initBoardData = this.__initBoardData.bind(this);
    }

    /**
     * Initialize board data on mount and set the boardData
     */
    __initBoardData(){
        const { height, width, mines } = this.props;
        let boardData = this.__createEmptyArray(height, width);
        //boardData = this.__plantMines(boardData, height, width, mines);

        this.setState({
            boardData
        })
    }

    /**
     * Creates a 2D array and each cell data[x][y] with default attributes
     * @param {Number} height height of the board
     * @param {Number} width width of the board
     * @returns {Array}
     */
    __createEmptyArray = (height, width) => {
        let data = [];
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

    /**
     * Randomly plants mines on the board and assigns the cells with mines an attribute of isMine
     * @param {Array} data Initial Array of cells,
     * @param {Number} height Height of the board
     * @param {Number} width width of the board
     * @param {Number} mines Number of mines to plant
     * @returns {Array} Returns the array cells, with randomly planted mines
     */
    __plantMines = (data, height, width, mines) => {
        let randomX, randomY, minesPlanted = 0;

        while(minesPlanted < mines){
            randomX = this.__getRandomNumber(width);
            randomY = this.__getRandomNumber(height); 
            console.log(data[0][0])
            let cell = data[randomX][randomY];
            
            // if this is not a mine
            if(!cell.isMine){
                cell.isMine = true
                minesPlanted += 1
            }
        }
        return data;
    }

    /**
     * Get a random number given a dimenstion
     * @param {Number} dimension
     */
    __getRandomNumber = dimension => {
        return Math.floor((Math.random() * 1000) + 1) % dimension;
    }

    static getDerivedStateFromProps(nextProps, prevState){
        const {  mines, height, width } = nextProps;

        if (mines !== prevState.mines || height !== prevState.height || width !== prevState.width){
            return {
                ...prevState,
                mines,
                height,
                width
            }
        } else {
            return null
        }
    }

    render(){
        return <div/>
    }

    componentDidMount() {
        this.__initBoardData()   
    }
}

Board.propTypes = {
    mines: number,
    height: number,
    width: number
}

export default Board;