import style from './TodoList.module.scss';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../../store/services/todo/actions';
import { filterTypeMap } from '../../../helper/constants';
import TodoItem from '../TodoItem';
import NoContent from '../NoContent';

const TodoList = () => {
  const { allTodos, filter, loading } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const filterTodos = (todos, filter) => {
    if (filter === filterTypeMap.ALL) {
      return todos;
    } else if (filter === filterTypeMap.DONE) {
      return todos.filter((todo) => todo.done === filterTypeMap.DONE);
    } else {
      return todos.filter((todo) => todo.done !== filterTypeMap.DONE);
    }
  };

  const shownTodos = filterTodos(allTodos, filter);
  const showNoContent = allTodos.length === 0 && !loading;
  return (
    <div className={style.container}>
      {showNoContent ? (
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
      )}
    </div>
  );
};

export default TodoList;
