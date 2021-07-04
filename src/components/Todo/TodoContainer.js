import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTodos } from '../../store/services/todo/actions';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <>
      <TodoList />
      <TodoForm />
    </>
  );
};

export default Todo;
