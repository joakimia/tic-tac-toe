export const PLAYER_ONE = 'X';
export const PLAYER_TWO = 'O';

export const changePlayer = currentPlayer =>
    currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;