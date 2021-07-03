import style from './TodoItem.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

const TodoItem = ({ id, done, title, description, deadline, onChange }) => {
  return (
    <div className={style.container}>
      <Checkbox className={style.checkbox} checked={done} onChange={() => onChange(id)}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={style.deadline}>{deadline}</div>
      </Checkbox>
    </div>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number,
  done: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  deadline: PropTypes.string,
  onChange: PropTypes.func,
};

export default TodoItem;
