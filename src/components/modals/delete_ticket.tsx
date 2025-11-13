/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Modal, Button } from 'antd';
import { useAlertContext } from '../../store/alert';
import { useTickets } from '../../store/ticket/context';

interface DeleteModalProps {
  open: boolean;
  onCancel: () => void;
  id: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ open, id, onCancel }) => {
  const { open: openAlert } = useAlertContext();
  const { deleteTicket, saving } = useTickets();

  const handleDelete = async () => {
    try {
      // const values = await form.validateFields();
      await deleteTicket(id);

      onCancel();
      openAlert({ message: 'Ticket successfully deleted', type: 'success' });
    } catch (err: any) {
      openAlert({
        message: err.message || 'Failed to delete ticket',
        type: 'error',
      });
    }
  };

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      centered
      title='Confirm Delete'
    >
      <p className='text-gray-700'>
        Are you sure you want to delete the ticket{' '}
        {/* <span className='font-semibold'>{ticketTitle}</span>? */}
      </p>
      <div className='flex justify-end gap-2 mt-4'>
        <Button onClick={onCancel}>Cancel</Button>
        <Button type='primary' danger onClick={handleDelete} loading={saving}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
