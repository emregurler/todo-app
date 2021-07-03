import types from './action-types';
import { filterTypeMap } from '../../../helper/constants';

const initialState = {
  allTodos: [],
  shownTodos: [],
  filter: filterTypeMap.ALL,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SUCCESS_ALL_TODOS:
      return {
        ...state,
        allTodos: action.todos,
        shownTodos: filterTodos(action.todos, state.filter),
      };
    case types.SUCCESS_TOGGLE_TODO:
      const foundId = state.allTodos.findIndex((todo) => todo.id === action.id);
      if (foundId > -1) {
        const copyTodos = [...state.allTodos];
        const changingTodo = copyTodos[foundId];
        copyTodos[foundId] = { ...changingTodo, done: !changingTodo.done };
        return {
          ...state,
          allTodos: copyTodos,
          shownTodos: filterTodos(copyTodos, state.filter),
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

const filterTodos = (todos, filter) => {
  if (filter === filterTypeMap.ALL) {
    return todos;
  } else if (filter === filterTypeMap.DONE) {
    return todos.filter((todo) => todo.done === filterTypeMap.DONE);
  } else {
    return todos.filter((todo) => todo.done !== filterTypeMap.DONE);
  }
};
