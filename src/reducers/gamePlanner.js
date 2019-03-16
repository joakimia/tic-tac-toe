import {
    START_GAME,
    CHANGE_TURN,
    INCREMENT_COUNT,
    ADD_STATS,
    RESET_COUNT,
} from '../actions/gamePlanner';
import { changePlayer, PLAYER_ONE } from '../modules/playerManager';

const defaultState = {
    isStarted: false,
    currentPlayer: PLAYER_ONE,
    count: 0,
    playerOneStats: 0,
    playerTwoStats: 0,
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case START_GAME:
            return {
                ...state,
                isStarted: true,
            };
        case ADD_STATS: {
            return {
                ...state,
                [action.value]: state[action.value] + 1, 
            }
        }
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
        case RESET_COUNT:
            return {
                ...state,
                count: 0
            }
        default:
            return state;
    }
};

const sGetState = state => state.gamePlanner;

export const sGetGameStatus = state => sGetState(state).isStarted;

export const sGetCurrentPlayer = state => sGetState(state).currentPlayer;

export const sGetCurrentCount = state => sGetState(state).count;

export const sGetIsStarted = state => sGetState(state).isStarted;

export const sGetPlayerOneStats = state => sGetState(state).playerOneStats;

export const sGetPlayerTwoStats = state => sGetState(state).playerTwoStats;