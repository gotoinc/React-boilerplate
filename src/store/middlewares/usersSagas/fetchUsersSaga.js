import { put, call, takeLeading } from 'redux-saga/effects';
import { fetchUsersActions } from '../../actions/usersActions';
import usersApi from '../../../services/usersApi';

// Sagas
function* fetchUsersSaga({ payload }) {
  try {
    const response = yield call(usersApi.getUsers, payload);
    yield put(fetchUsersActions.success(response.data.results));
    return response.data.results;
  } catch (err) {
    yield put(fetchUsersActions.failure(err));
    return err;
  }
}

// Watchers
export function* watchUsers() {
  yield takeLeading(fetchUsersActions.start, fetchUsersSaga);
}
