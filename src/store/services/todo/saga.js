import { takeLatest } from 'redux-saga/effects';
import types from './action-types';

function* dummySaga() {
  console.log('DUMMY SAGA');
  yield;
}

export default function* todoSaga() {
  yield takeLatest(types.DUMMY_ACTION, dummySaga);
}
