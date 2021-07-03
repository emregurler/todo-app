import types from './action-types';

export const fetchAllTodos = () => ({
  type: types.FETCH_ALL_TODOS,
});

export const failAllTodos = ({ error }) => ({
  type: types.FAIL_ALL_TODOS,
  error,
});

export const successAllTodos = ({ todos }) => ({
  type: types.SUCCESS_ALL_TODOS,
  todos,
});

export const filterBy = ({ filter }) => ({
  type: types.FILTER_BY,
  filter,
});

export const addTodo = ({ todo }) => ({
  type: types.ADD_TODO,
  todo,
});
