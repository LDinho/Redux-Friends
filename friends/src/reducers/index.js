import {
  FETCH_FRIENDS,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIEND,
} from "../actions";

const initialState = {
  friends: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      console.log('STATE', state)
      return {
        ...state,
        friends: [{name: 'jon'}],
      };
    default:
      return state;
  }
};

