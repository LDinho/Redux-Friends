import axios from 'axios'

// Login action
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = credentials => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios.post('http://localhost:5000/api/login', credentials).then(res => {
    localStorage.setItem('token', res.data.payload);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
  });
};

// Getting the friends data action
export const FETCH_FRIENDS = 'fetch_friends';
export const FETCH_FRIENDS_SUCCESS = 'fetch_friends_success';
export const FETCH_FRIENDS_FAILURE = 'fetch_friends_failure';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS });

  axios.get('http://localhost:5000/api/friends', {
      headers: { Authorization: localStorage.getItem('token') }
    })
    .then(res => {
      console.log('RESPONSE FROM actions:', res);
      dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('call failed: ', err.response);
      if (err.response.status === 403) {
        dispatch({
          type: FETCH_FRIENDS_FAILURE,
          payload: err.response
        });
      }
    });
};

// export const ADD_FRIEND = 'add_friend';
