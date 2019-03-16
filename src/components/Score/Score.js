import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sGetPlayerOneStats, sGetPlayerTwoStats } from '../../reducers/gamePlanner';
import { acStartGame } from '../../actions/gamePlanner';

import '../styles/App.css';

export const Score = ({ onStartGame, playerOneStats, playerTwoStats }) => (
    <div className="score-board">
        <div>{'Click to start'}</div>
        <div>
            <button onClick={onStartGame}>{'Start'}</button>
        </div>
        <div>{'Current score: '}</div>
        <div className="player-stats">
            <span>{`Player one: ${playerOneStats}`}</span>
            <span>{`Player two: ${playerTwoStats}`}</span>
        </div>
    </div>
);

Score.propTypes = {
    onStartGame: PropTypes.func.isRequired,
    playerOneStats: PropTypes.number.isRequired,
    playerTwoStats: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
    playerOneStats: sGetPlayerOneStats(state),
    playerTwoStats: sGetPlayerTwoStats(state)
});

export default connect(
    mapStateToProps,
    {
        onStartGame: acStartGame
    }
)(Score);