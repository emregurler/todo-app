import style from './TodoList.module.scss';

import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, Button } from 'antd';
import {
  deleteTodo,
  toggleTodo,
  setFilter,
  setTemplateMode,
} from '../../../store/services/todo/actions';
import { filterTypeMap, templateModeMap } from '../../../helper/constants';
import Template from '../../Template';
import NoContent from '../NoContent';
import TodoItem from '../TodoItem';

const TodoList = () => {
  const { allTodos, filter, loading, templateMode } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const isListVisible = templateMode === templateModeMap.LIST;

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
      <Button
        onClick={() => {
          dispatch(setTemplateMode(templateModeMap.ADD));
        }}
        size={hasNoContent ? 'large' : 'middle'}
        shape="round"
        style={{ padding: '0 40px' }}
      >
        Add Todo
      </Button>
    </div>
  );

  const renderMainContent = () => {
    const shownTodos = filterTodos(allTodos, filter);
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
          onEdit={(todo) => {
            dispatch(setTemplateMode(templateModeMap.EDIT, todo));
          }}
        />
      ))
    );
  };

  const transitionClassNames = {
    enter: style['todoList-enter'],
    enterActive: style['todoList-enter-active'],
    exit: style['todoList-exit'],
    exitActive: style['todoList-exit-active'],
    exitDone: style['todoList-exit-done'],
  };

  return (
    <CSSTransition in={isListVisible} unmountOnExit classNames={transitionClassNames} timeout={250}>
      <Template title="Todo App">
        <Template.Header title="Todo App">{renderHeaderBottomContent()}</Template.Header>
        <Template.Content>{renderMainContent()}</Template.Content>
      </Template>
    </CSSTransition>
  );
};

TodoList.propTypes = {};

export default TodoList;
