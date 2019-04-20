import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Friends from './components/Friends';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Friends
          </h1>
          <div className="nav-wrapper">
            <NavLink exact to="/login">Log in form</NavLink>

            <NavLink exact to="/">Home</NavLink>
          </div>
        </header>

        <Route path="/login" component={ Login } />
        <PrivateRoute exact path="/friends"
                      component={Friends}
        />
      </div>
    );
  }
}

export default App;
