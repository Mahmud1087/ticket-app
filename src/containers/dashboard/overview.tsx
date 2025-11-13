import DashboardLayout from '../../layout/dashboard-layout';
import { Card, Flex, Table, type TableProps } from 'antd';
import type { Ticket } from '../../types/global';
import { useTickets } from '../../store/ticket/context';
import { LuFileCheck2, LuTickets } from 'react-icons/lu';
import { MdOutlinePendingActions } from 'react-icons/md';

// interface DataType {
//   key: string;
//   title: string;
//   status: React.ReactNode;
//   priority: React.ReactNode;
// }

const columns: TableProps<Ticket>['columns'] = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    // render: (text) => <a>{text}</a>,
    width: 320,
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
    key: 'priority',
    width: 200,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 150,
  },
];

const Overview = () => {
  const { tickets } = useTickets();

  const stats = [
    {
      id: 1,
      name: 'Total Tickets',
      icon: <LuTickets size={24} className='text-blue-500' />,
      number: tickets.length,
    },
    {
      id: 2,
      name: 'In Progreess Tickets',
      icon: <MdOutlinePendingActions size={24} className='text-orange-500' />,
      number: tickets.filter((t) => t.status === 'in progress').length,
    },
    {
      id: 3,
      name: 'Resolved Tickets',
      icon: <LuFileCheck2 size={24} className='text-green-500' />,
      number: tickets.filter((t) => t.status === 'closed').length,
    },
  ];

  const data: Ticket[] = tickets
    .map((t) => ({
      key: String(t.id),
      id: String(t.id),
      title: t.title,
      status: (
        <p
          className={`py-1 px-5 rounded-full w-fit ${
            t.status === 'in progress'
              ? 'bg-amber-200 text-amber-800'
              : t.status === 'closed'
              ? 'bg-gray-200 text-gray-800'
              : 'bg-green-200 text-green-800'
          }`}
        >
          {t.status}
        </p>
      ),
      priority: (
        <p
          className={`${
            t.priority === 'low'
              ? 'text-green-500'
              : t.priority === 'medium'
              ? 'text-amber-800'
              : 'text-red-500'
          }`}
        >
          {t.priority}
        </p>
      ),
    }))
    .slice(0, 10);

  return (
    <DashboardLayout>
      <section>
        <div className='flex flex-col gap-2 md:flex-row'>
          {stats.map((stat) => {
            return (
              <Card key={stat.id} className='shadow w-full'>
                <Flex justify='space-between' align='center'>
                  <p className='text-lg'>{stat.name}</p>
                  {stat.icon}
                </Flex>
                <p className='mt-3 text-2xl font-medium'>{stat.number}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className='mt-5'>
        <h1 className='mt-10 mb-3 text-lg font-medium'>Recent Tickets</h1>
        <Table<Ticket>
          virtual
          // columns={mergedColumns}
          scroll={{ x: 500, y: 400 }}
          columns={columns}
          dataSource={data}
          pagination={false}
          className='rounded-lg'
        />
      </section>
    </DashboardLayout>
  );
};
export default Overview;
