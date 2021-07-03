import types from './action-types';

const initialState = { allTodos: [], shownTodos: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
