/* eslint-disable @typescript-eslint/no-explicit-any */
import DashboardLayout from '../../layout/dashboard-layout';
import {
  Button,
  Card,
  Divider,
  Dropdown,
  Flex,
  Input,
  Select,
  Typography,
  type MenuProps,
} from 'antd';
import { tickets } from '../../utils/data';
import { MoreOutlined } from '@ant-design/icons';
import AddTicketModal from '../../components/modals/add_ticket';
import { useState } from 'react';
import EditTicketModal from '../../components/modals/edit_ticket';
import DeleteModal from '../../components/modals/delete_ticket';

const { Title, Paragraph, Text } = Typography;

const TicketManagement = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  // const handleAdd = (values: any) => {
  //   addTicket(values);
  //   setAddOpen(false);
  // };

  const items: MenuProps['items'] = [
    {
      label: (
        <p className='w-full cursor-pointer' onClick={() => setEditOpen(true)}>
          Edit
        </p>
      ),
      key: '0',
    },
    {
      className: 'w-22',
      type: 'divider',
    },
    {
      label: (
        <p
          className='w-full cursor-pointer'
          onClick={() => setDeleteOpen(true)}
        >
          Delete
        </p>
      ),

      key: '1',
    },
  ];

  return (
    <DashboardLayout>
      <AddTicketModal
        open={addOpen}
        onCancel={() => setAddOpen(false)}
        // onSubmit={handleAdd}
      />

      <EditTicketModal open={editOpen} onCancel={() => setEditOpen(false)} />

      <DeleteModal open={deleteOpen} onCancel={() => setDeleteOpen(false)} />

      <div className='mb-5'>
        <Flex className='flex flex-col md:flex-row md:items-center md:justify-between'>
          <Flex vertical>
            <Title level={3}>Tickets</Title>
            <Paragraph>Manage all your tickets here</Paragraph>
          </Flex>
          <Button type='primary' onClick={() => setAddOpen(true)}>
            Add Ticket
          </Button>
        </Flex>
      </div>

      <Divider />

      <section className='flex flex-col gap-4'>
        <aside className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
          <div className='w-full md:w-72'>
            <Input.Search
              placeholder='Search by title'
              size='large'
              className='w-full'
            />
          </div>
          <Flex align='center' className='justify-between md:justify-end gap-5'>
            <h2 className='text-lg font-medium'>Filter By:</h2>
            <Select
              defaultValue={'all'}
              onChange={handleChange}
              style={{
                width: '7rem',
              }}
              options={[
                {
                  label: 'All',
                  value: 'all',
                },
                {
                  label: 'Low',
                  value: 'low',
                },
                {
                  label: 'Medium',
                  value: 'medium',
                },
                {
                  label: 'High',
                  value: 'high',
                },
              ]}
            />
          </Flex>
        </aside>

        <section className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
          {tickets.map((t) => {
            return (
              <Card key={t.id} className='shadow w-full'>
                <Flex align='center' justify='space-between'>
                  <Title level={4} className=''>
                    {t.title}
                  </Title>
                  <Dropdown menu={{ items }} trigger={['click']}>
                    <MoreOutlined className='text-xl mb-2 cursor-pointer p-1' />
                  </Dropdown>
                </Flex>
                <Text type='secondary' className='text-2xl'>
                  {t.desc}
                </Text>
                <div className='mt-6'>
                  <Flex justify='space-between' align='center'>
                    {t.priority}
                    {t.status}
                  </Flex>
                </div>
              </Card>
            );
          })}
        </section>
      </section>
    </DashboardLayout>
  );
};
export default TicketManagement;
