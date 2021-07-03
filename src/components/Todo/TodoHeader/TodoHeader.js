import style from './TodoHeader.module.scss';

import React from 'react';
import PropTypes from 'prop-types';

const TodoHeader = (props) => {
  return (
    <div className={style.container}>
      <h1>Todo App</h1>
    </div>
  );
};

TodoHeader.propTypes = {};

export default TodoHeader;
