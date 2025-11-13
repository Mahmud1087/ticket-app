/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Modal, Form, Input, Select, Button, Flex } from 'antd';
import { useAlertContext } from '../../store/alert';
import { LoadingOutlined } from '@ant-design/icons';
import { useTickets } from '../../store/ticket/context';
export interface TicketFormValues {
  title: string;
  description?: string;
  status: 'open' | 'in progress' | 'closed';
  priority?: 'low' | 'medium' | 'high';
}

interface AddTicketModalProps {
  open: boolean;
  onCancel: () => void;
  // onSubmit: (values: TicketFormValues) => void;
}

const AddTicketModal: React.FC<AddTicketModalProps> = ({
  open,
  onCancel,
  // onSubmit,
}) => {
  const [form] = Form.useForm();
  const { open: openAlert } = useAlertContext();
  const { addTicket, saving } = useTickets();

  const handleOk = async (values: any) => {
    try {
      // const values = await form.validateFields();
      await addTicket(values);

      onCancel();
      openAlert({ message: 'Ticket successfully created', type: 'success' });
      form.resetFields();
    } catch (err: any) {
      openAlert({
        message: err.message || 'Failed to create ticket',
        type: 'error',
      });
    }
  };

  return (
    <Modal
      title='Add New Ticket'
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <Form
        form={form}
        layout='vertical'
        initialValues={{ status: 'open', priority: 'low' }}
        onFinish={handleOk}
      >
        <Form.Item
          label='Title'
          name='title'
          rules={[{ required: true, message: 'Title is required' }]}
        >
          <Input placeholder='Enter ticket title' />
        </Form.Item>

        <Form.Item
          label='Description'
          name='description'
          rules={[
            {
              max: 50,
              message: 'Description must not exceed 50 characters',
            },
          ]}
        >
          <Input.TextArea
            placeholder='Enter short description (optional)'
            rows={3}
          />
        </Form.Item>

        <Form.Item
          label='Status'
          name='status'
          rules={[{ required: true, message: 'Status is required' }]}
        >
          <Select>
            <Select.Option value='open'>Open</Select.Option>
            <Select.Option value='in progress'>In Progress</Select.Option>
            <Select.Option value='closed'>Closed</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='Priority' name='priority'>
          <Select allowClear placeholder='Select priority'>
            <Select.Option value='low'>Low</Select.Option>
            <Select.Option value='medium'>Medium</Select.Option>
            <Select.Option value='high'>High</Select.Option>
          </Select>
        </Form.Item>

        <div className='flex justify-end gap-2 mt-4'>
          <Button onClick={onCancel} htmlType='button'>
            Cancel
          </Button>
          <Button type='primary' htmlType='submit'>
            {saving ? (
              <Flex justify='space-between' align='center' gap={8}>
                <LoadingOutlined />
                <span>Processing ...</span>
              </Flex>
            ) : (
              'Add Ticket'
            )}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddTicketModal;
