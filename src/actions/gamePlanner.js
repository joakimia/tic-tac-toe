export const START_GAME = 'START_GAME';
export const CHANGE_TURN = 'CHANGE_TURN';
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const ADD_STATS = 'ADD_STATS';
export const RESET_COUNT = 'RESET_COUNT';

export const acStartGame = () => ({
    type: START_GAME,
});

export const acAddStats = value => ({
    type: ADD_STATS,
    value,
});

export const acResetCount = () => ({
    type: RESET_COUNT,
});

export const acChangePlayer = () => ({
    type: CHANGE_TURN,
});

export const acIncrementCount = () => ({
    type: INCREMENT_COUNT,
});