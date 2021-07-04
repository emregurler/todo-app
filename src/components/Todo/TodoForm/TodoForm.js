import style from './TodoForm.module.scss';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { addTodo, updateTodo, setTemplateMode } from '../../../store/services/todo/actions';
import Template from '../../Template';
import { templateModeMap } from '../../../helper/constants';
import { defaultDateFormat } from '../../../helper/dateHelper';
import Form from './Form';

const TodoForm = () => {
  const { templateMode, editingTodo: todo } = useSelector((state) => state.todoReducer);

  const isEditMode = templateMode === templateModeMap.EDIT;
  const isTodoFormVisible = templateMode !== templateModeMap.LIST;

  const dispatch = useDispatch();

  const onFinish = (values) => {
    const id = todo?.id;
    const deadline = values.deadline.format(defaultDateFormat);
    const newTodo = { ...values, deadline, done: false };
    if (isEditMode) {
      dispatch(updateTodo({ ...newTodo, id }));
    } else {
      dispatch(addTodo(newTodo));
    }
  };

  const transitionClassNames = {
    enter: style['todoForm-enter'],
    enterActive: style['todoForm-enter-active'],
    exit: style['todoForm-exit'],
    exitActive: style['todoForm-exit-active'],
    exitDone: style['todoForm-exit-done'],
  };

  return (
    <CSSTransition
      in={isTodoFormVisible}
      unmountOnExit
      classNames={transitionClassNames}
      timeout={250}
    >
      <Template>
        <Template.Header title={isEditMode ? 'Edit Todo' : 'Add Todo'}></Template.Header>
        <Template.Content>
          <div className={style.contentContainer}>
            <Form
              todo={todo}
              onSubmit={onFinish}
              onBack={() => {
                dispatch(setTemplateMode(templateModeMap.LIST));
              }}
            />
          </div>
        </Template.Content>
      </Template>
    </CSSTransition>
  );
};

TodoForm.propTypes = {
  todo: PropTypes.object,
};

export default TodoForm;
