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

export const filterBy = (filter) => ({
  type: types.FILTER_BY,
  filter,
});

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  todo,
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
