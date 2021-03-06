import types from './action-types';
import { filterTypeMap, templateModeMap } from '../../../helper/constants';

export const initialState = {
  allTodos: [],
  filter: filterTypeMap.ALL,
  templateMode: templateModeMap.LIST,
  editingTodo: undefined,
  hasData: undefined,
  loading: false,
  deletingTodoId: undefined,
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
    case types.ADD_TODO:
      return {
        ...state,
        loading: true,
      };
    case types.SUCCESS_ADD_TODO:
      return {
        ...state,
        allTodos: [...state.allTodos, action.todo],
        templateMode: templateModeMap.LIST,
        hasData: true,
        loading: false,
      };
    case types.SET_DELETING_TODO_ID:
      return {
        ...state,
        deletingTodoId: action.id,
      };
    case types.SUCCESS_DELETE_TODO:
      const allTodos = state.allTodos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        allTodos,
        deletingTodoId: undefined,
        hasData: allTodos.length > 0,
      };
    case types.FAIL_DELETE_TODO:
      return {
        ...state,
        deletingTodoId: undefined,
      };
    case types.UPDATE_TODO: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.SUCCESS_UPDATE_TODO: {
      const newTodos = state.allTodos.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo,
      );
      return {
        ...state,
        allTodos: newTodos,
        templateMode: templateModeMap.LIST,
        loading: false,
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
