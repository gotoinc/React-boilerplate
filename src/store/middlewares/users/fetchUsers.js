import { put, call, takeLeading } from 'redux-saga/effects';
import { fetchUsersSuccess, fetchUsersFail, fetchUsersStart } from '../../actions/users';
import { fetchUsersRequest } from '../../../services/api';

function* fetchUsers({ payload }) {
  try {
    const { data } = yield call(fetchUsersRequest, payload);
    yield put(fetchUsersSuccess(data.results));
    return data.results;
  } catch (err) {
    yield put(fetchUsersFail(err));
    return err;
  }
}

// Watchers
export function* watchUsers() {
  yield takeLeading(fetchUsersStart, fetchUsers);
}
