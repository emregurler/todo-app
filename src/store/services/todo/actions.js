import types from './action-types';

export const fetchAllTodos = () => ({
  type: types.FETCH_ALL_TODOS,
});

export const failAllTodos = (error) => ({
  type: types.FAIL_ALL_TODOS,
  error,
});

export const successAllTodos = (todos) => ({
  type: types.SUCCESS_ALL_TODOS,
  todos,
});

export const setFilter = (filter) => ({
  type: types.SET_FILTER,
  filter,
});

export const addTodo = (todo, successCallback) => ({
  type: types.ADD_TODO,
  todo,
  successCallback,
});

export const successAddTodo = (todo) => ({
  type: types.SUCCESS_ADD_TODO,
  todo,
});

export const failAddTodo = (error) => ({
  type: types.FAIL_ADD_TODO,
  error,
});

export const toggleTodo = (todo) => ({
  type: types.TOGGLE_TODO,
  todo,
});

export const successToggleTodo = (id) => ({
  type: types.SUCCESS_TOGGLE_TODO,
  id,
});

export const failToggleTodo = (error) => ({
  type: types.FAIL_TOGGLE_TODO,
  error,
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  id,
});

export const successDeleteTodo = (id) => ({
  type: types.SUCCESS_DELETE_TODO,
  id,
});

export const failDeleteTodo = (error) => ({
  type: types.FAIL_DELETE_TODO,
  error,
});
