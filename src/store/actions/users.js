import { createActions } from 'redux-actions';

export const { fetchUsersStart, fetchUsersSuccess, fetchUsersFail } = createActions({
  FETCH_USERS_START: (data = {}) => data,
  FETCH_USERS_SUCCESS: (data = {}) => ({ data }),
  FETCH_USERS_FAIL: (error = {}) => ({ error }),
});
