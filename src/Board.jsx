import React, { Component } from 'react';
import { number } from "prop-types";
import "./styles/board.scss";


class Board extends Component {
    constructor(props){
        super(props);

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