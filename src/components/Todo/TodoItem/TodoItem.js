import style from './TodoItem.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Button } from 'antd';
import { getTaskStatusWithDate } from '../../../helper/dateHelper';

const TodoItem = ({
  id,
  done,
  title,
  description,
  deadline,
  onChangeCheckbox,
  onDelete,
  onEdit,
}) => {
  const taskStatus = getTaskStatusWithDate(deadline, done);

  return (
    <div className={style.container}>
      <Checkbox className={style.checkbox} checked={done} onChange={() => onChangeCheckbox(id)}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={`${style.deadline} ${style[`deadline__${taskStatus}`]}`}>{deadline}</div>
        <div className={style.operationTab}>
          <Button size="small" type="primary" danger onClick={() => onDelete(id)}>
            Delete
          </Button>
          <Button size="small" onClick={() => onEdit(id)}>
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
