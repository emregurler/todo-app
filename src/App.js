import 'antd/dist/antd.css';
import style from './App.module.scss';
import Todo from './components/Todo';
import { createTodoList } from './data/todolist';

import React from 'react';

const App = () => {
  const todoList = createTodoList(10);

  console.log(todoList);
  return (
    <div className={style.container}>
      <div className={style.header} />
      <div className={style.content}>
        <Todo todoList={todoList} />
      </div>
    </div>
  );
};

export default App;
