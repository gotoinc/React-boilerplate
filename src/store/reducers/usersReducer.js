import { handleActions } from 'redux-actions';
import * as usersActions from '../actions/usersActions';

const initialState = {
  users: [],
  error: '',
  loading: false,
  role: 'member',
  locale: 'ru',
};

const usersReducer = handleActions(
  {
    [usersActions.fetchUsersActions.start]: state => ({
      ...state,
      loading: true,
    }),
    [usersActions.fetchUsersActions.success]: (state, action) => {
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    },
    [usersActions.fetchUsersActions.failure]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
  initialState
);

export default usersReducer;
