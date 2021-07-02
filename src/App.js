import './App.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dummyAction } from './store/services/todo/actions';

const App = (props) => {
  const todoReducer = useSelector((state) => state.todoReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(dummyAction());
  }, []);
  return <div className="App">HELLO {todoReducer.foo}</div>;
};

export default App;
