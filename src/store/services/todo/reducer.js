import types from './action-types';

const initialState = {
  foo: 'foo3',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DUMMY_ACTION:
      return {
        ...state,
      };

    default:
      return state;
  }
};
