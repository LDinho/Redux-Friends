import React, { Component } from 'react';

import Friends from './components/Friends';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Friends
          </h1>
        </header>

        <Friends />
      </div>
    );
  }
}

export default App;
