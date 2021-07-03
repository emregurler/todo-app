import style from './TodoList.module.scss';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

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
          onChangeCheckbox={(id) => {}}
          onDelete={(id) => {}}
          onEdit={(id) => {}}
        />
      ))}
    </div>
  );
};

export default TodoList;
