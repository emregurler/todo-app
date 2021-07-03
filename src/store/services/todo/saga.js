import { takeLatest, call, put } from 'redux-saga/effects';
import types from './action-types';
import { failAllTodos, successAllTodos, successToggleTodo, failToggleTodo } from './actions';
import { getTodos, putTodo, deleteTodo } from './api';

function* fetchAllTodos() {
  try {
    const res = yield call(getTodos);
    yield put(successAllTodos(res.data));
  } catch (e) {
    console.error(e);
    yield put(failAllTodos(e));
  }
}

function* toggleTodo({ todo }) {
  try {
    const updatedTodo = { ...todo, done: !todo.done };
    const res = yield call(putTodo, updatedTodo.id, updatedTodo);
    yield put(successToggleTodo(todo.id));
  } catch (e) {
    console.error(e);
    yield put(failToggleTodo(e));
  }
}

export default function* todoSaga() {
  yield takeLatest(types.FETCH_ALL_TODOS, fetchAllTodos);
  yield takeLatest(types.TOGGLE_TODO, toggleTodo);
}
