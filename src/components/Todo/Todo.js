import style from './Todo.module.scss';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import { fetchAllTodos } from '../../store/services/todo/actions';

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);
  return (
    <div className={style.container}>
      <TodoHeader />
      <TodoList />
    </div>
  );
};

export default Todo;
