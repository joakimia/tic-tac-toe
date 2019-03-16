import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sGetCurrentPlayer, sGetIsStarted } from '../../reducers/gamePlanner';

import '../styles/App.css';

export const Timer = ({ currentPlayer, isStarted }) => (
    <div className="timer">
        <div>{`Current player: ${isStarted ? currentPlayer : '' }`}</div>
        <div>{'Time Limit'}</div>
    </div>
);

Timer.propTypes = {
    currentPlayer: PropTypes.string,
    isStarted: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    currentPlayer: sGetCurrentPlayer(state),
    isStarted: sGetIsStarted(state),
});

export default connect(
    mapStateToProps,
    null
)(Timer);