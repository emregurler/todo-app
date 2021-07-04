import types from './action-types';
import { filterTypeMap } from '../../../helper/constants';

const initialState = {
  allTodos: [],
  shownTodos: [],
  filter: filterTypeMap.ALL,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_ALL_TODOS:
      return {
        ...state,
        loading: true,
      };
    case types.SUCCESS_ALL_TODOS:
      return {
        ...state,
        allTodos: action.todos,
        loading: false,
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
        };
      } else {
        return state;
      }
    case types.SUCCESS_ADD_TODO:
      return {
        ...state,
        allTodos: [...state.allTodos, action.todo],
      };
    case types.SUCCESS_DELETE_TODO:
      return {
        ...state,
        allTodos: state.allTodos.filter((todo) => todo.id !== action.id),
      };
    case types.SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
};
