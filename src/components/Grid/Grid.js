import React from 'react';
import GridItem from './GridItem';

import '../styles/App.css';

export const Grid = () => (
    <div className="grid-container">
        <div className="grid-column">
            <GridItem section={'1A'} />
            <GridItem section={'1B'} />
            <GridItem section={'1C'} />
        </div>
        <div className="grid-column">
            <GridItem section={'2A'} />
            <GridItem section={'2B'} />
            <GridItem section={'2C'} />
        </div>
        <div className="grid-column">
            <GridItem section={'3A'} />
            <GridItem section={'3B'} />
            <GridItem section={'3C'} />
        </div>
    </div>
);

export default Grid;