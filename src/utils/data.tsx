import { BookOutlined, LayoutOutlined } from '@ant-design/icons';
import { DASHBOARD_PAGE, TICKETS_PAGE } from '../config/routes';

export const nav_items = [
  { icon: LayoutOutlined, link: DASHBOARD_PAGE, name: 'Dashboard' },
  { icon: BookOutlined, link: TICKETS_PAGE, name: 'Tickets' },
  // { icon: UserOutlined, link: PROFILE_PAGE, name: 'Profile' },
];

export const tickets = [
  {
    id: '1',
    title: 'Laptop not working',
    desc: 'My laptop stopped working, I dont know why please help me',
    status: (
      <p className='bg-amber-200 text-amber-800 py-1 px-5 rounded-full w-fit'>
        In Progress
      </p>
    ),
    priority: <p className='text-green-500'>Low</p>,
  },
  {
    id: '2',
    title: 'Roof open',
    desc: 'My roof just opened up, I do not know what to do at this point',
    status: (
      <p className='bg-amber-200 text-amber-800 py-1 px-5 rounded-full w-fit'>
        In Progress
      </p>
    ),
    priority: <p className='text-amber-800'>Medium</p>,
  },
  {
    id: '3',
    title: 'Phone stopped working',
    desc: 'Phone screen stopped showing, just blank. What do I do',
    status: (
      <p className='bg-gray-200 text-gray-800 py-1 px-5 rounded-full w-fit'>
        Closed
      </p>
    ),
    priority: <p className='text-amber-800'>Medium</p>,
  },
  {
    id: '4',
    title: 'Error in the software, how to fix',
    desc: 'The recently intalled software is behaving in a way I dont understand, come check it out',
    status: (
      <p className='bg-green-200 text-green-800 py-1 px-5 rounded-full w-fit'>
        Open
      </p>
    ),
    priority: <p className='text-red-500'>High</p>,
  },
  {
    id: '5',
    title: 'Error in the software, how to fix',
    desc: 'The recently intalled software is behaving in a way I dont understand, come check it out',
    status: (
      <p className='bg-green-200 text-green-800 py-1 px-5 rounded-full w-fit'>
        Open
      </p>
    ),
    priority: <p className='text-red-500'>High</p>,
  },
];
