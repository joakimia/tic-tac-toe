import { ADD_MOVE, RESET_MOVES } from '../actions/player';

const defaultState = {
    registeredMoves: {},
}

export default (state = defaultState, action ) => {
    switch (action.type) {
        case ADD_MOVE:
            return {
                ...state,
                registeredMoves: {
                    ...state.registeredMoves, 
                    [action.value.id]: action.value.player
                }
            };
        case RESET_MOVES:
            return defaultState;
        default:
            return state;
    }
};

const sGetState = state => state.player;

export const sGetRegisteredMoves = state => sGetState(state).registeredMoves;
