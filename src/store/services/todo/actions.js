import types from './action-types';

export const dummyAction = () => {
  console.log('dummyAction');
  return {
    type: types.DUMMY_ACTION,
    foo: 'bar',
  };
};
