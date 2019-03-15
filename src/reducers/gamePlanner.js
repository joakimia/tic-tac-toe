import { START_GAME, CHANGE_TURN, INCREMENT_COUNT } from '../actions/gamePlanner';
import { changePlayer } from '../modules/playerManager';

const defaultState = {
    isStarted: false,
    currentPlayer: 'X',
    count: 0,
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case START_GAME:
            return defaultState;
        case CHANGE_TURN:
            return {
                ...state,
                currentPlayer: changePlayer(state.currentPlayer)
            } 
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            } 
        default:
            return state;
    }
};

const sGetState = state => state.gamePlanner;

export const sGetGameStatus = state => sGetState(state).isStarted;

export const sGetCurrentPlayer = state => sGetState(state).currentPlayer;

export const sGetCurrentCount = state => sGetState(state).count;