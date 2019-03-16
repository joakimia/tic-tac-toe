import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '../Grid/Grid';
import WinnerDialog from '../Dialog/WinnerDialog';
import { checkGameStatus } from '../../modules/gameValidator';
import { sGetRegisteredMoves } from '../../reducers/player';
import { sGetCurrentPlayer, sGetCurrentCount } from '../../reducers/gamePlanner';
import { acChangePlayer, acStartGame, acResetCount } from '../../actions/gamePlanner';
import { acResetMoves } from '../../actions/player';

import '../styles/App.css';

export class Board extends Component {
    componentDidUpdate(prevProps) {
        if (prevProps.currentCount !== this.props.currentCount) {
            this.props.changePlayer();
        }
    };

    onResetGame = () => {
        this.props.resetMoves();
        this.props.resetCount();
        this.props.resetGame();
    };

    render() {
        return (
            <div className="board">
                <Grid />
                {this.props.winner
                    ? <WinnerDialog
                        winner={this.props.winner}
                        onResetGame={this.onResetGame}
                    />
                    : null
                }
            </div>
        );
    }
};

const mapStateToProps = state => ({
    winner: checkGameStatus(sGetRegisteredMoves(state), sGetCurrentCount(state)),
    currentCount: sGetCurrentCount(state),
    currentPlayer: sGetCurrentPlayer(state),
});

export default connect(mapStateToProps, {
    changePlayer: acChangePlayer,
    resetMoves: acResetMoves,
    resetCount: acResetCount,
    resetGame: acStartGame,
})(Board);