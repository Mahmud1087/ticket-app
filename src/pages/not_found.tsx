import { Link, useNavigate } from 'react-router-dom';
import { LANDING_PAGE } from '../config/routes';
import { Button, Flex } from 'antd';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className='h-screen w-screen flex items-center justify-center flex-col gap-3'>
      <h1 className='text-3xl font-semibold'>404 - Page Not Found</h1>
      <Flex gap={10}>
        <Button className='' onClick={() => navigate(-1)} type='primary'>
          Go Back
        </Button>
        <Link to={LANDING_PAGE}>
          <Button>Landing Page</Button>
        </Link>
      </Flex>
    </div>
  );
};
export default NotFoundPage;
