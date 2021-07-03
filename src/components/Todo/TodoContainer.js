import style from './TodoContainer.module.scss';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTodos } from '../../store/services/todo/actions';
import { templateModeMap } from '../../helper/constants';
import TodoList from './TodoList';

const Todo = () => {
  const [templateMode, setTemplateMode] = useState(templateModeMap.LIST);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTodos());
  }, []);

  return <TodoList />;
};

export default Todo;
