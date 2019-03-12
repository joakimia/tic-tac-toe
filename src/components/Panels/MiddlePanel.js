import React from 'react';
import Board from '../Board/Board';
import Score from '../Score/Score';
import Timer from '../Timer/Timer';

import '../styles/App.css';

export const MiddlePanel = () => (
    <div className="section-middle">
        <div className="middle-flex">
            <Score />
            <Board />
            <Timer />
        </div>
    </div>
);

export default MiddlePanel;