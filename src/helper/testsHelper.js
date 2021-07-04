import { reducerInitialState } from '../store/services/todo/reducer';

export const todosLenght_1 = [
  {
    id: 1,
    title: 'Todo1',
    decription: 'Description1',
    deadline: '2021-07-04 22:00:00',
    done: false,
  },
];

export const todosLenght_2 = [
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

export const todoReducer_2 = {
  ...reducerInitialState,
  allTodos: todosLenght_2,
  hasData: true,
};
