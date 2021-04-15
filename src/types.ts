export type CellData = {
    x: number; 
    y: number;
    isMine: boolean;
    isFlagged: boolean;
    isRevealed: boolean;
    neighbour: number;
    isEmpty: boolean;
}
