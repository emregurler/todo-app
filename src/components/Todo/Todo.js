import style from './Todo.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';

const Todo = ({ todoList }) => {
  return (
    <div className={style.container}>
      <TodoHeader />
      <TodoList list={todoList} />
    </div>
  );
};

Todo.propTypes = {
  todoList: PropTypes.array,
};

export default Todo;
