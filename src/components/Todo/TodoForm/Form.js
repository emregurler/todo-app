import React, { useEffect } from 'react';
import { Form as AntForm, Input, Button, DatePicker, Row, Space, Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import moment from 'moment';
import PropTypes from 'prop-types';
import { defaultDateFormat } from '../../../helper/dateHelper';

const { TextArea } = Input;

const Form = ({ todo, onSubmit, onBack }) => {
  const [form] = AntForm.useForm();

  useEffect(() => {
    if (todo) {
      const deadline = moment(todo.deadline, defaultDateFormat);
      form.setFieldsValue({ ...todo, deadline });
    } else {
      handleReset();
    }
  }, [JSON.stringify(todo)]);

  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

  const handleReset = () => {
    form.resetFields();
  };

  return (
    <AntForm
      layout="vertical"
      onFinish={onSubmit}
      form={form}
      initialValues={{ layout: 'horizontal' }}
    >
      <AntForm.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "Please enter todo's title!", whitespace: true }]}
      >
        <Input placeholder="Enter title" />
      </AntForm.Item>
      <AntForm.Item name="description" label="Description">
        <TextArea rows={4} placeholder="Enter description" />
      </AntForm.Item>
      <AntForm.Item
        name="deadline"
        label="Deadline"
        rules={[{ type: 'object', required: true, message: 'Please select time!' }]}
      >
        <DatePicker format="YYYY-MM-DD HH:mm:ss" showTime />
      </AntForm.Item>
      <Divider style={{ border: 'none' }} />
      <AntForm.Item>
        <Row justify="space-between">
          <Button
            icon={<ArrowLeftOutlined />}
            size="large"
            htmlType="button"
            onClick={() => {
              onBack(() => {
                handleReset();
              });
            }}
          >
            Back
          </Button>

          <Space>
            <Button style={{ padding: '0 40px' }} size="large" type="primary" htmlType="submit">
              {todo ? 'Update' : 'Add'}
            </Button>
            <Button size="large" htmlType="button" onClick={handleReset}>
              Reset Fields
            </Button>
          </Space>
        </Row>
      </AntForm.Item>
    </AntForm>
  );
};

Form.propTypes = {
  todo: PropTypes.object,
  onSubmit: PropTypes.func,
  onBack: PropTypes.func,
};

export default Form;
