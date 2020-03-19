import { all } from 'redux-saga/effects';

import { watchUsers } from './usersSagas';

export default function* rootSaga() {
  yield all([watchUsers()]);
}
