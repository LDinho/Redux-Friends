import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFriends } from '../actions';
import Friend from './Friend';

class Friends extends Component {

  componentDidMount() {
    this.props.getFriends();

  }

  render() {
    return (
      <section className="friends-list">
        <Link to="/">
          <div className="button-home">
            Home
          </div>
        </Link>

        <Link to="/new">
          <div className="button-add">
            Add New Friend
          </div>
        </Link>

        <ul>
          {this.props.friends.map( (friend) => {
              return (
                  <Friend key={friend.id} friend={friend}/>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

const mapStateToProps = ({friends, fetchingFriends}) => ({
  friends,
  fetchingFriends,
});

export default withRouter(
  connect(
    mapStateToProps,
    { getFriends }
  )(Friends)
);
