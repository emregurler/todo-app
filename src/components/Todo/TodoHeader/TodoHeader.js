import style from './TodoHeader.module.scss';

import React from 'react';
import PropTypes from 'prop-types';
import { Radio, Button } from 'antd';

const TodoHeader = (props) => {
  const onChange = (e) => {
    // console.log(`radio checked:${e.target.value}`);
  };
  return (
    <div className={style.container}>
      <h1>Todo App</h1>
      <div className={style.headerOperationContainer}>
        <div className={style.operations}>
          <Radio.Group onChange={onChange} defaultValue="a">
            <Radio.Button value="all">All</Radio.Button>
            <Radio.Button value="done">Done</Radio.Button>
            <Radio.Button value="active">Active</Radio.Button>
          </Radio.Group>
        </div>
        <Button shape="round" style={{ padding: '0 40px' }}>
          Add Todo
        </Button>
      </div>
    </div>
  );
};

TodoHeader.propTypes = {};

export default TodoHeader;
