import React from 'react';
import { Modal, Button } from 'antd';

interface DeleteModalProps {
  open: boolean;
  onCancel: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ open, onCancel }) => {
  const onConfirm = () => {
    onCancel();
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
        <Button type='primary' danger onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
