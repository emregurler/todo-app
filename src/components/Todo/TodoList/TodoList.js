import style from './TodoList.module.scss';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from '../TodoItem';
import { toggleTodo } from '../../../store/services/todo/actions';
import { deleteTodo } from '../../../store/services/todo/api';

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer.shownTodos);
  const dispatch = useDispatch();

  return (
    <div className={style.container}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          title={todo.title}
          description={todo.description}
          deadline={todo.deadline}
          onChangeCheckbox={(todo) => {
            dispatch(toggleTodo(todo));
          }}
          onDelete={(id) => {
            dispatch(deleteTodo(id));
          }}
          onEdit={(id) => {}}
        />
      ))}
    </div>
  );
};

export default TodoList;
