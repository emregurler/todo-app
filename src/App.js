import 'antd/dist/antd.css';
import style from './App.module.scss';
import Todo from './components/Todo';

import React from 'react';

const App = () => {
  return (
    <div className={style.container}>
      <div className={style.header} />
      <div className={style.content}>
        <Todo />
      </div>
    </div>
  );
};

export default App;
