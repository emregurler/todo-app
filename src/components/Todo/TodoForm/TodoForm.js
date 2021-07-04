import style from './TodoForm.module.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo, updateTodo } from '../../../store/services/todo/actions';
import Template from '../../Template';
import { templateModeMap } from '../../../helper/constants';
import { defaultDateFormat } from '../../../helper/dateHelper';

import { Form, Input, Button, DatePicker } from 'antd';
const { TextArea } = Input;

const TodoForm = ({ todo }) => {
  const { formMode } = useSelector((state) => state.todoReducer);

  const renderMainContent = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values) => {
      console.log(values);
      const id = todo?.id;
      const deadline = values.deadline.format(defaultDateFormat);
      const newTodo = { ...values, deadline, done: false };
      if (formMode === templateModeMap.EDIT) {
        dispatch(
          updateTodo({ id, ...newTodo }, () => {
            form.resetFields();
          }),
        );
      } else if (templateModeMap.ADD) {
        dispatch(
          addTodo(newTodo, () => {
            form.resetFields();
          }),
        );
      }
    };

    const onReset = () => {
      form.resetFields();
    };

    const tailLayout = {
      wrapperCol: { offset: 6, span: 16 },
    };

    return (
      <div className={style.container}>
        <>
          <Form
            layout="vertical"
            onFinish={onFinish}
            form={form}
            initialValues={{ layout: 'horizontal' }}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please enter todo's title!", whitespace: true }]}
            >
              <Input placeholder="Enter title" />
            </Form.Item>
            <Form.Item name="description" label="Description">
              <TextArea rows={4} placeholder="Enter description" />
            </Form.Item>
            <Form.Item
              name="deadline"
              label="Deadline"
              rules={[{ type: 'object', required: true, message: 'Please select time!' }]}
            >
              <DatePicker format="YYYY-MM-DD HH:mm:ss" />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button style={{ padding: '0 40px' }} size="large" type="primary" htmlType="submit">
                Add
              </Button>
              <Button size="large" htmlType="button" onClick={onReset}>
                Reset Fields
              </Button>
            </Form.Item>
          </Form>
        </>
      </div>
    );
  };

  const templateTitle = formMode === templateModeMap.EDIT ? 'Edit Todo' : 'Add Todo';
  return (
    <Template className={style.abc}>
      <Template.Header title={templateTitle}></Template.Header>
      <Template.Content>{renderMainContent()}</Template.Content>
    </Template>
  );
};

TodoForm.propTypes = {
  todo: PropTypes.object,
};

export default TodoForm;
