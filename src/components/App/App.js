import React, { Component } from 'react';
import LeftPanel from '../Panels/LeftPanel';
import MiddlePanel from '../Panels/MiddlePanel';
import RightPanel from '../Panels/RightPanel';

import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>{'Tic-Tac-Toe'}</header>
        <div className="flex-container">
          <LeftPanel />
          <MiddlePanel />
          <RightPanel />
        </div>
      </div>
    );
  }
}

export default App;
