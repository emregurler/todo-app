import style from './TodoItem.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Button } from 'antd';
import { getTaskStatusWithDate } from '../../../helper/dateHelper';

const TodoItem = (props) => {
  const { onChangeCheckbox, onDelete, onEdit, ...todo } = props;
  const taskStatus = getTaskStatusWithDate(todo.deadline, todo.done);

  return (
    <div className={style.container}>
      <Checkbox
        className={style.checkbox}
        checked={todo.done}
        onChange={() => onChangeCheckbox(todo)}
      >
        <div className={style.title}>{todo.title}</div>
        <div className={style.description}>{todo.description}</div>
        <div className={`${style.deadline} ${style[`deadline__${taskStatus}`]}`}>
          {todo.deadline}
        </div>
        <div className={style.operationTab}>
          <Button size="small" type="primary" danger onClick={() => onDelete(todo.id)}>
            Delete
          </Button>
          <Button size="small" onClick={() => onEdit(todo)}>
            Edit
          </Button>
        </div>
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
  onChangeCheckbox: PropTypes.func,
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default TodoItem;
