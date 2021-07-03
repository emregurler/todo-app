import style from './TodoHeader.module.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, Button } from 'antd';
import { setFilter } from '../../../store/services/todo/actions';

const TodoHeader = () => {
  const { allTodos, filter, loading } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const onChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const hasNoContent = allTodos.length === 0 && !loading;

  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <div className={style.headerOperationContainer}>
        <div className={style.operations}>
          <Radio.Group
            className={hasNoContent ? style.hidden : ''}
            onChange={onChange}
            defaultValue={filter}
          >
            <Radio.Button value="all">All</Radio.Button>
            <Radio.Button value="done">Done</Radio.Button>
            <Radio.Button value="active">Active</Radio.Button>
          </Radio.Group>
        </div>
        <Button
          size={hasNoContent ? 'large' : 'middle'}
          shape="round"
          style={{ padding: '0 40px' }}
        >
          Add Todo
        </Button>
      </div>
    </div>
  );
};

export default TodoHeader;
