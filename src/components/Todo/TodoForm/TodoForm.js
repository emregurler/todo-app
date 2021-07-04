import style from './TodoForm.module.scss';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../../../store/services/todo/actions';
import Template from '../../Template';
import { templateModeMap } from '../../../helper/constants';
import { defaultDateFormat } from '../../../helper/dateHelper';

import { Form, Input, Button, DatePicker } from 'antd';
const { TextArea } = Input;

const TodoForm = ({ mode, todo }) => {
  const templateTitle = mode === templateModeMap.EDIT ? 'Edit Todo' : 'Add Todo';

  const renderMainContent = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = (values) => {
      console.log(values);
      const deadline = values.deadline.format(defaultDateFormat);
      const newTodo = { ...values, deadline, done: false };
      dispatch(
        addTodo(newTodo, () => {
          form.resetFields();
        }),
      );
    };

    const onReset = () => {
      form.resetFields();
    };

    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
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
              <Button size="large" type="primary" htmlType="submit">
                Submit
              </Button>
              <Button size="large" htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </Form>
        </>
      </div>
    );
  };

  return <Template className={style.abc} title={templateTitle} mainContent={renderMainContent()} />;
};

TodoForm.propTypes = {
  mode: PropTypes.oneOf(['edit', 'add', 'list']),
  todo: PropTypes.object,
};

export default TodoForm;
