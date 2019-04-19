export const FETCH_FRIENDS = 'fetch_friends';
export const FETCH_FRIENDS_SUCCESS = 'fetch_friends_success';
export const FETCH_FRIENDS_FAILURE = 'fetch_friends_failure';

export const ADD_FRIEND = 'add_friend';

export const getFriends = () => {
  return {
    type: FETCH_FRIENDS,
  }
};

export const add_friend = (newFriend) => {
  return {
    type: ADD_FRIEND,
    payload: newFriend,
  }
};

