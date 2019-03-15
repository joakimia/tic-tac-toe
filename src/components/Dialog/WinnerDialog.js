import React from 'react';
import PropTypes from 'prop-types';

import '../styles/App.css';

export const WinnerDialog = ({ winner, onResetGame }) => (
    <div className="dialog">
        <div className="dialog-content">
            {`Winner is: ${winner}`}
        </div>
        <div style={{ cursor: 'pointer' }} className="dialog-content" onClick={onResetGame}>
            {'Play again?'}
        </div>
    </div>
);

WinnerDialog.propTypes = {
    winner: PropTypes.string,
    onResetGame: PropTypes.func.isRequired,
};

export default WinnerDialog;