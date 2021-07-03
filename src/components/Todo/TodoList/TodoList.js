import style from './TodoList.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';

const TodoList = ({ list }) => {
  return (
    <div className={style.container}>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          title={todo.title}
          description={todo.description}
          deadline={todo.deadline}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  list: PropTypes.array,
};

export default TodoList;
