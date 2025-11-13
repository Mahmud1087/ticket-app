/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { useTickets } from '../../store/ticket/context';
import { useAlertContext } from '../../store/alert';

interface EditTicketModalProps {
  open: boolean;
  onCancel: () => void;
  id: string;
}

const EditTicketModal: React.FC<EditTicketModalProps> = ({
  open,
  onCancel,
  id,
}) => {
  const [form] = Form.useForm();
  const { open: openAlert } = useAlertContext();
  const { updateTicket, saving, tickets } = useTickets();

  const ticket = tickets.find((t) => t.id === id);

  const handleUpdate = async (values: any) => {
    try {
      // const values = await form.validateFields();
      await updateTicket(id, values);

      onCancel();
      openAlert({ message: 'Ticket successfully updated', type: 'success' });
      form.resetFields();
    } catch (err: any) {
      console.log(err);

      openAlert({
        message: err.message || 'Failed to update ticket',
        type: 'error',
      });
    }
  };

  return (
    <Modal
      title='Edit Ticket'
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <Form
        form={form}
        onFinish={handleUpdate}
        layout='vertical'
        initialValues={ticket}
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
            { max: 50, message: 'Description must not exceed 50 characters' },
          ]}
        >
          <Input.TextArea
            rows={3}
            placeholder='Enter short description (optional)'
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
          <Button
            loading={saving}
            type='primary'
            htmlType='submit'
            // onClick={handleUpdate}
          >
            Update Ticket
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default EditTicketModal;
