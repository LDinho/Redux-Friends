import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { login } from '../actions';

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = (event) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  login = (event) => {
    event.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push('/protected'));
  };

  render() {
    return (
      <div className="login-form-wrapper">
        <form onSubmit={this.login}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder=" "
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />

          <button>
            {this.props.isLoggedIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Login'
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({isLoggedIn}) => ({
  isLoggedIn,
});

export default withRouter(
  connect(
    mapStateToProps,
    { login }
  )(Login)
);
