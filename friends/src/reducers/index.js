import {
  LOGIN_START,
  LOGIN_SUCCESS,
  FETCH_FRIENDS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
} from "../actions";

const initialState = {
  friends: [],
  isLoggedIn: false,
  fetchingFriends: false,
  error: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload
      };
    case FETCH_FRIENDS:
      console.log('STATE', state)
      return {
        ...state,
        fetchingFriends: true,
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetchingFriends: false,
        error: '',
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingFriends: false,
      };
    default:
      return state;
  }
};

