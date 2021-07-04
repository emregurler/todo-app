import { filterTypeMap, templateModeMap } from '../../../helper/constants';
import reducer from './reducer';
import { successAddTodo, successDeleteTodo, successToggleTodo, successUpdateTodo } from './actions';

describe('Todo reducer tests starting...', () => {
  const initialState = {
    allTodos: [],
    filter: filterTypeMap.ALL,
    templateMode: templateModeMap.LIST,
    editingTodo: undefined,
    hasData: undefined,
    loading: false,
  };

  it('todo reducer should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('initial todo reducer should add new todo succesfully', () => {
    const newTodo = {
      id: 1,
      title: 'Todo1',
      decription: 'Description1',
      deadline: '2021-07-04 22:00:00',
      done: false,
    };
    expect(reducer(initialState, successAddTodo(newTodo))).toEqual({
      allTodos: [
        {
          id: 1,
          title: 'Todo1',
          decription: 'Description1',
          deadline: '2021-07-04 22:00:00',
          done: false,
        },
      ],
      filter: filterTypeMap.ALL,
      templateMode: templateModeMap.LIST,
      editingTodo: undefined,
      hasData: true,
      loading: false,
    });
  });

  it('todo reducer should delete todo succesfully', () => {
    const allTodos = [
      {
        id: 1,
        title: 'Todo1',
        decription: 'Description1',
        deadline: '2021-07-04 22:00:00',
        done: false,
      },
      {
        id: 2,
        title: 'Todo2',
        decription: 'Description2',
        deadline: '2021-07-04 22:00:00',
        done: false,
      },
    ];
    const deletingId = 1;
    expect(
      reducer({ ...initialState, allTodos, hasData: true }, successDeleteTodo(deletingId)),
    ).toEqual({
      allTodos: [
        {
          id: 2,
          title: 'Todo2',
          decription: 'Description2',
          deadline: '2021-07-04 22:00:00',
          done: false,
        },
      ],
      filter: filterTypeMap.ALL,
      templateMode: templateModeMap.LIST,
      editingTodo: undefined,
      hasData: true,
      loading: false,
    });
  });

  it('todo reducer should delete LAST todo succesfully', () => {
    const allTodos = [
      {
        id: 1,
        title: 'Todo1',
        decription: 'Description1',
        deadline: '2021-07-04 22:00:00',
        done: false,
      },
    ];
    const deletingId = 1;
    expect(reducer({ ...initialState, allTodos }, successDeleteTodo(deletingId))).toEqual({
      allTodos: [],
      filter: filterTypeMap.ALL,
      templateMode: templateModeMap.LIST,
      editingTodo: undefined,
      hasData: false,
      loading: false,
    });
  });

  it('todo reducer should toggle todo succesfully', () => {
    const allTodos = [
      {
        id: 1,
        title: 'Todo1',
        decription: 'Description1',
        deadline: '2021-07-04 22:00:00',
        done: false,
      },
    ];
    const togglingTodoId = 1;
    expect(
      reducer({ ...initialState, allTodos, hasData: true }, successToggleTodo(togglingTodoId)),
    ).toEqual({
      allTodos: [
        {
          id: 1,
          title: 'Todo1',
          decription: 'Description1',
          deadline: '2021-07-04 22:00:00',
          done: true,
        },
      ],
      filter: filterTypeMap.ALL,
      templateMode: templateModeMap.LIST,
      editingTodo: undefined,
      hasData: true,
      loading: false,
    });
  });

  it('todo reducer should update todo succesfully', () => {
    const allTodos = [
      {
        id: 1,
        title: 'Todo1',
        decription: 'Description1',
        deadline: '2021-07-04 22:00:00',
        done: false,
      },
    ];
    const updatedTodo = {
      id: 1,
      title: 'Todo1 name changed',
      decription: 'Description1 changed',
      deadline: '2021-08-04 23:00:00',
      done: true,
    };
    expect(
      reducer({ ...initialState, allTodos, hasData: true }, successUpdateTodo(updatedTodo)),
    ).toEqual({
      allTodos: [
        {
          id: 1,
          title: 'Todo1 name changed',
          decription: 'Description1 changed',
          deadline: '2021-08-04 23:00:00',
          done: true,
        },
      ],
      filter: filterTypeMap.ALL,
      templateMode: templateModeMap.LIST,
      editingTodo: undefined,
      hasData: true,
      loading: false,
    });
  });
});
