import React from 'react';
import TopLeft from './TopLeft';
import TopCenter from './TopCenter';
import TopRight from './TopRight';
import MiddleLeft from './MiddleLeft';
import MiddleCenter from './MiddleCenter';
import MiddleRight from './MiddleRight';
import BottomLeft from './BottomLeft';
import BottomCenter from './BottomCenter';
import BottomRight from './BottomRight';

import '../styles/App.css';

export const Grid = () => (
    <div className="grid-container">
        <div className="grid-column">
            <TopLeft />
            <MiddleLeft />
            <BottomLeft />
        </div>
        <div className="grid-column">
            <TopCenter />
            <MiddleCenter />
            <BottomRight />
        </div>
        <div className="grid-column">
            <TopRight />
            <MiddleRight />
            <BottomCenter />
        </div>
    </div>
);

export default Grid;