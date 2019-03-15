import React from 'react';
import { connect } from 'react-redux';
import onClickWrapper from '../../modules/onClickWrapper';
import { sGetRegisteredMoves } from '../../reducers/player'; 
import { sGetCurrentPlayer } from '../../reducers/gamePlanner';
import { acAddMove } from '../../actions/player';
import { acIncrementCount } from '../../actions/gamePlanner';

import '../styles/App.css';

export const GridItem = ({ 
    section,
    currentMove,
    isOccuppied,
    onAddMove,
    onChangeturn 
}) => (
    <div 
        className="grid-item"
        onClick={() => onClickWrapper(
            section, 
            currentMove,
            isOccuppied,
            onAddMove,
            onChangeturn
        )}
    >
        {isOccuppied ? <div> {isOccuppied} </div> : null}
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    isOccuppied: sGetRegisteredMoves(state)[ownProps.section],
    currentMove: sGetCurrentPlayer(state)
});

export default connect(
    mapStateToProps, 
    {
        onAddMove: acAddMove,
        onChangeturn: acIncrementCount
    }
)(GridItem);