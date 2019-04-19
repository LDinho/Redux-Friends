import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFriends } from '../actions';

class Friends extends Component {
  constructor(props) {
    super(props);
  }

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

        {this.props.friends.map( (friend) => {
            return (
              <div> { friend.name }</div>
            )
          })
        }
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
