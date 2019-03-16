import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import onClickWrapper from '../../modules/onClickWrapper';
import { sGetRegisteredMoves } from '../../reducers/player'; 
import { sGetCurrentPlayer, sGetIsStarted } from '../../reducers/gamePlanner';
import { acAddMove } from '../../actions/player';
import { acIncrementCount } from '../../actions/gamePlanner';

import styles from '../styles/inline.style';
import '../styles/App.css';

export const GridItem = ({ 
    section,
    playerMove,
    isOccuppied,
    onAddMove,
    onChangeTurn,
    isStarted 
}) => (
    <div 
        className="grid-item"
        style={isStarted ? styles.cursor : {}}
        onClick={() => isStarted ? onClickWrapper(
            section, 
            playerMove,
            isOccuppied,
            onAddMove,
            onChangeTurn
        ) : null}
    >
        {isOccuppied ? <div> {isOccuppied} </div> : null}
    </div>
);

GridItem.propTypes = {
    section: PropTypes.string.isRequired,
    playerMove: PropTypes.string.isRequired,
    onAddMove: PropTypes.func.isRequired,
    onChangeTurn: PropTypes.func.isRequired,
    isStarted: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
    isOccuppied: sGetRegisteredMoves(state)[ownProps.section],
    playerMove: sGetCurrentPlayer(state),
    isStarted: sGetIsStarted(state),
});

export default connect(
    mapStateToProps, 
    {
        onAddMove: acAddMove,
        onChangeTurn: acIncrementCount
    }
)(GridItem);