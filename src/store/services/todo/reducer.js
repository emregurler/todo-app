import types from './action-types';
import { filterTypeMap, templateModeMap } from '../../../helper/constants';

const initialState = {
  allTodos: [],
  filter: filterTypeMap.ALL,
  templateMode: templateModeMap.LIST,
  editingTodo: undefined,
  hasData: undefined,
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
        hasData: action.todos?.length > 0,
      };
    case types.SUCCESS_TOGGLE_TODO: {
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
    }
    case types.SUCCESS_ADD_TODO:
      return {
        ...state,
        allTodos: [...state.allTodos, action.todo],
        templateMode: templateModeMap.LIST,
        hasData: true,
      };
    case types.SUCCESS_DELETE_TODO:
      const allTodos = state.allTodos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        allTodos,
        hasData: allTodos.length > 0,
      };
    case types.SUCCESS_UPDATE_TODO: {
      const newTodos = state.allTodos.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo,
      );
      return {
        ...state,
        allTodos: newTodos,
        templateMode: templateModeMap.LIST,
      };
    }
    case types.SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    case types.SET_TEMPLATE_MODE:
      return {
        ...state,
        templateMode: action.templateMode,
        editingTodo: action.todo ? { ...action.todo } : null,
      };
    default:
      return state;
  }
};
