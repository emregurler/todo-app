import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, fetchAllTodos, setDeletingTodoId } from '../../store/services/todo/actions';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Modal } from 'antd';

const Todo = () => {
  const { deletingTodoId } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return (
    <>
      <Modal
        title="Are you sure to delete?"
        centered
        visible={!!deletingTodoId}
        onOk={() => dispatch(deleteTodo(deletingTodoId))}
        onCancel={() => dispatch(setDeletingTodoId())}
      ></Modal>
      <TodoList />
      <TodoForm />
    </>
  );
};

export default Todo;
