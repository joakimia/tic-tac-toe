import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PLAYER_ONE } from '../../modules/playerManager';
import { NO_WINNER } from '../../modules/gameValidator';
import { acAddStats } from '../../actions/gamePlanner';

import '../styles/App.css';
import styles from '../styles/inline.style';

export class WinnerDialog extends Component {
    componentDidMount() {
        if (this.props.winner !== NO_WINNER) {
            this.props.updateWinnerCount(
                this.props.winner === PLAYER_ONE
                    ? 'playerOneStats'
                    : 'playerTwoStats'
            );
        }
    }

    render() {
        return (
            <div className="dialog">
                <div className="dialog-content">

                    {this.props.winner !== NO_WINNER
                        ? `Winner is: ${this.props.winner}`
                        : `No winner`
                    }
                </div>
                <div  className="dialog-content">
                    <button
                        style={styles.cursor} 
                        onClick={this.props.onResetGame}
                    >
                    {'Play again?'}
                    </button>
                </div>
            </div>
        );
    }
};

WinnerDialog.propTypes = {
    winner: PropTypes.string,
    onResetGame: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        updateWinnerCount: acAddStats,
    }
)(WinnerDialog);