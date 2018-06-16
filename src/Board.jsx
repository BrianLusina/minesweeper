import React, { Component } from 'react';
import { number } from "prop-types";
import "./styles/board.scss";


class Board extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: 0,
            height: 0,
            mines: 0
        }
    }

    render(){
        return <div/>
    }
}

Board.propTypes = {
    mines: number,
    height: number,
    width: number
}

export default Board;