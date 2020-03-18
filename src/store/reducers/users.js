import { handleActions } from 'redux-actions';
import * as usersActions from '../actions';

const initialState = {
  users: [],
};

const users = handleActions(
  {
    [usersActions.fetchUsersStart]: state => ({
      ...state,
      loading: true,
    }),
    [usersActions.fetchUsersSuccess]: (state, { payload: { data } }) => {
      return {
        ...state,
        loading: false,
        usersList: data,
      };
    },
    [usersActions.fetchUsersFail]: (state, { payload: { error } }) => ({
      ...state,
      loading: false,
      error,
    }),
  },
  initialState
);

export default users;
