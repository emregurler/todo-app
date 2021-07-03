import { takeLatest, call } from 'redux-saga/effects';
import types from './action-types';
import { getTodos } from './api';

function* fetchAllTodos() {
  try {
    const res = yield call(getTodos);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}

export default function* todoSaga() {
  yield takeLatest(types.FETCH_ALL_TODOS, fetchAllTodos);
}
