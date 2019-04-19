import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Friends from './components/Friends';
import Login from './components/Login';
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

        <Route path="/login" component={ Login } />

      </div>
    );
  }
}

export default App;
