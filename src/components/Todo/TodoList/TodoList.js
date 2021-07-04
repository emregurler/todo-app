import style from './TodoList.module.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, Button } from 'antd';
import { deleteTodo, toggleTodo, setFilter } from '../../../store/services/todo/actions';
import { filterTypeMap } from '../../../helper/constants';
import Template from '../../Template';
import NoContent from '../NoContent';
import TodoItem from '../TodoItem';

const TodoList = () => {
  const { allTodos, filter, loading } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const filterTodos = (todos, filter) => {
    if (filter === filterTypeMap.ALL) {
      return todos;
    } else if (filter === filterTypeMap.DONE) {
      return todos.filter((todo) => todo.done);
    } else {
      return todos.filter((todo) => !todo.done);
    }
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const hasNoContent = allTodos.length === 0 && !loading;

  const renderHeaderBottomContent = () => (
    <div className={style.headerOperationContainer}>
      <div className={style.operations}>
        <Radio.Group
          className={hasNoContent ? style.hidden : ''}
          onChange={handleFilterChange}
          defaultValue={filter}
        >
          <Radio.Button value="all">All</Radio.Button>
          <Radio.Button value="done">Done</Radio.Button>
          <Radio.Button value="active">Active</Radio.Button>
        </Radio.Group>
      </div>
      <Button size={hasNoContent ? 'large' : 'middle'} shape="round" style={{ padding: '0 40px' }}>
        Add Todo
      </Button>
    </div>
  );

  const renderMainContent = () => {
    const shownTodos = filterTodos(allTodos, filter);

    console.log(shownTodos);
    return hasNoContent ? (
      <NoContent />
    ) : (
      shownTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          done={todo.done}
          title={todo.title}
          description={todo.description}
          deadline={todo.deadline}
          onChangeCheckbox={(todo) => {
            dispatch(toggleTodo(todo));
          }}
          onDelete={(id) => {
            dispatch(deleteTodo(id));
          }}
          onEdit={(id) => {}}
        />
      ))
    );
  };

  return (
    <Template
      className={style.abc}
      title="Todo App"
      headerBottomContent={renderHeaderBottomContent()}
      mainContent={renderMainContent()}
    />
  );
};

TodoList.propTypes = {};

export default TodoList;
