export const ADD_MOVE = 'ADD_MOVE';
export const RESET_MOVES = 'RESET_MOVES';

export const acAddMove = value => ({
    type: ADD_MOVE,
    value
});

export const acResetMoves = () => ({
    type: RESET_MOVES
});