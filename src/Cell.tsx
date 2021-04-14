import React, { Component, MouseEvent } from 'react';
import { CellData } from './types';
import "./styles/cell.scss"

interface Props {
    value: CellData,
    onClick: (event: MouseEvent<HTMLDivElement, MouseEvent>) => void,
    onCtxMenu: Function
}

interface State {
    value: {
        isMine: boolean,
        isFlagged: boolean,
        isRevealed: boolean,
        neighbour: number        
    }
}

/**
 * Cell component renders each square
 */
export default class Cell extends Component<Props, State> {
    constructor(props: Props){
        super(props);
        this.state = {
            value: {
                ...props.value,                
            }
        }
    }

    /**
     * This gets the value of the cell
     * If the cell is not yet revealed, we return a null value
     * if, the cell is not yet revealved, but flagged, we return a flag value
     * if the cell is revealed but is a mine, we return a bomb
     * if the cell is revealed, but is not a mine, we return the number of mines around it
     * If the cell is revealed and has zero mines in its neighbouring cells, we return a null value.
     */
    __getValue = () => {
        const { value: { isRevealed, isFlagged, isMine, neighbour } } = this.state;

        if(!isRevealed){
            return isFlagged ? "🚩": null
        }

        if(isMine){
            return "💣"
        }

        if(neighbour === 0){
            return null
        }

        return neighbour
    }

    static getDerivedStateFromProps(nextProps: Props, prevState: State){
        const { value } = nextProps;

        if(value !== prevState.value){
            return {
                ...prevState,
                value
            }
        } else {
            return null
        }
    }

    render(){
        const { value : { isFlagged, isMine, isRevealed } , onClick, onCtxMenu } = this.props;
        let className = "cell " + 
        (isRevealed ? "" : "hidden ") +
        (isMine ? " is-mine " : "") +
        (isFlagged ? " is-flag " : "");

        return( 
            <div
                // @ts-ignore
                onClick={onClick}
                className={className}
                // @ts-ignore
                onContextMenu={onCtxMenu}
            >
                {this.__getValue()}
            </div>
        )
    }
}
