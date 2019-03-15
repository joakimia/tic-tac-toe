import { combineReducers } from 'redux';
import player from './player';
import gamePlanner from './gamePlanner';

export default combineReducers({
    player,
    gamePlanner,
});