import { takeLatest, call, put } from 'redux-saga/effects';
import types from './action-types';
import {
  failAllTodos,
  successAllTodos,
  successToggleTodo,
  failToggleTodo,
  successAddTodo,
  failAddTodo,
  successDeleteTodo,
  failDeleteTodo,
} from './actions';
import { getTodos, putTodo, deleteTodo, postTodo } from './api';

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

function* addTodo({ todo, successCallback }) {
  try {
    const res = yield call(postTodo, todo);
    console.log(res.data);
    yield put(successAddTodo(res.data));
    successCallback();
  } catch (e) {
    console.error(e);
    yield put(failAddTodo(e));
  }
}

function* removeTodo({ id }) {
  try {
    yield call(deleteTodo, id);
    yield put(successDeleteTodo(id));
  } catch (e) {
    console.error(e);
    yield put(failDeleteTodo(e));
  }
}

export default function* todoSaga() {
  yield takeLatest(types.FETCH_ALL_TODOS, fetchAllTodos);
  yield takeLatest(types.TOGGLE_TODO, toggleTodo);
  yield takeLatest(types.ADD_TODO, addTodo);
  yield takeLatest(types.DELETE_TODO, removeTodo);
}
