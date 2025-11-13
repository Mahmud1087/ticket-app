import DashboardLayout from '../../layout/dashboard-layout';
import {
  Button,
  Card,
  Divider,
  Dropdown,
  Flex,
  Input,
  Select,
  Skeleton,
  Typography,
  type MenuProps,
} from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import AddTicketModal from '../../components/modals/add_ticket';
import { useEffect, useMemo, useState } from 'react';
import EditTicketModal from '../../components/modals/edit_ticket';
import DeleteModal from '../../components/modals/delete_ticket';
import { useTickets } from '../../store/ticket/context';

const { Title, Paragraph, Text } = Typography;

export const TICKETS = 'ticketflow_tickets_v1';

const TicketManagement = () => {
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);

  const { tickets } = useTickets();

  // 🧭 Search and filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // ⏳ Loading state for skeleton
  const [loading, setLoading] = useState(false);

  // 🕒 Debounce search
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [searchTerm, priorityFilter]);

  // 🔍 Filtered and searched tickets
  const filteredTickets = useMemo(() => {
    let filtered = tickets;

    if (searchTerm.trim()) {
      filtered = filtered.filter((t) =>
        t.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (priorityFilter !== 'all') {
      filtered = filtered.filter((t) => t.priority === priorityFilter);
    }

    return filtered;
  }, [tickets, searchTerm, priorityFilter]);

  // 🧭 Handlers
  const handleEditOpen = (id: string) => {
    setSelectedTicketId(id);
    setEditOpen(true);
  };

  const handleDeleteOpen = (id: string) => {
    setSelectedTicketId(id);
    setDeleteOpen(true);
  };

  return (
    <DashboardLayout>
      {/* Add Ticket */}
      <AddTicketModal open={addOpen} onCancel={() => setAddOpen(false)} />

      {/* Edit Ticket */}
      <EditTicketModal
        id={selectedTicketId as string}
        open={editOpen}
        onCancel={() => {
          setEditOpen(false);
          setSelectedTicketId(null);
        }}
      />

      {/* Delete Ticket */}
      <DeleteModal
        id={selectedTicketId as string}
        open={deleteOpen}
        onCancel={() => {
          setDeleteOpen(false);
          setSelectedTicketId(null);
        }}
      />

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
        {/* 🔍 Search and Filter */}
        <aside className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
          <div className='w-full md:w-72'>
            <Input.Search
              placeholder='Search by title'
              size='large'
              allowClear
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full'
            />
          </div>

          <Flex align='center' className='justify-between md:justify-end gap-5'>
            <h2 className='text-lg font-medium'>Filter By:</h2>
            <Select
              value={priorityFilter}
              onChange={setPriorityFilter}
              style={{ width: '7rem' }}
              options={[
                { label: 'All', value: 'all' },
                { label: 'Low', value: 'low' },
                { label: 'Medium', value: 'medium' },
                { label: 'High', value: 'high' },
              ]}
            />
          </Flex>
        </aside>

        {/* 🧩 Ticket List */}
        <section className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
          {loading ? (
            // 🦴 Skeleton Loader
            Array.from({ length: 3 }).map((_, idx) => (
              <Card key={idx} className='shadow w-full'>
                <Skeleton active paragraph={{ rows: 3 }} />
              </Card>
            ))
          ) : filteredTickets?.length >= 1 ? (
            filteredTickets.map((t) => {
              const menuItems: MenuProps['items'] = [
                {
                  label: (
                    <p
                      className='w-full cursor-pointer'
                      onClick={() => handleEditOpen(t.id)}
                    >
                      Edit
                    </p>
                  ),
                  key: '0',
                },
                { type: 'divider' as const },
                {
                  label: (
                    <p
                      className='w-full cursor-pointer'
                      onClick={() => handleDeleteOpen(t.id)}
                    >
                      Delete
                    </p>
                  ),
                  key: '1',
                },
              ];

              return (
                <Card key={t.id} className='shadow w-full'>
                  <Flex align='center' justify='space-between'>
                    <Title level={4}>{t.title}</Title>
                    <Dropdown menu={{ items: menuItems }} trigger={['click']}>
                      <MoreOutlined className='text-xl mb-2 cursor-pointer p-1' />
                    </Dropdown>
                  </Flex>
                  <Text type='secondary' className='text-2xl'>
                    {t.description}
                  </Text>
                  <div className='mt-6'>
                    <Flex justify='space-between' align='center'>
                      <p
                        className={`capitalize py-0.5 px-4 rounded-full w-fit ${
                          t.status === 'in progress'
                            ? 'bg-amber-200 text-amber-800'
                            : t.status === 'closed'
                            ? 'bg-gray-200 text-gray-800'
                            : 'bg-green-200 text-green-800'
                        }`}
                      >
                        {t.status}
                      </p>
                      <p
                        className={`capitalize ${
                          t.priority === 'low'
                            ? 'text-blue-500'
                            : t.priority === 'medium'
                            ? 'text-amber-800'
                            : 'text-red-500'
                        }`}
                      >
                        {t.priority}
                      </p>
                    </Flex>
                  </div>
                </Card>
              );
            })
          ) : (
            <div className='flex items-center justify-center h-44 w-full text-2xl italic text-gray-500'>
              No tickets found
            </div>
          )}
        </section>
      </section>
    </DashboardLayout>
  );
};

export default TicketManagement;
