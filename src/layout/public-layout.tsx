import React, { useState } from 'react';
import { Button, Drawer, Flex, Layout } from 'antd';
import Logo from '../components/common/logo';
import { RiMenu3Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { LOGIN_PAGE, REGISTER_PAGE } from '../config/routes';

const { Header, Content } = Layout;

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const showSidebar = () => {
    setOpenSidebar(true);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  return (
    <>
      <Sidebar open={openSidebar} closeSidebar={closeSidebar} />
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            height: '5rem',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Flex
            className='w-full text-white'
            justify='space-between'
            align='center'
          >
            <Logo />
            <div className='md:hidden' onClick={showSidebar}>
              <RiMenu3Fill size={23} />
            </div>
            <div className='hidden md:flex md:gap-4'>
              <Link to={LOGIN_PAGE}>
                <Button>Login</Button>
              </Link>
              <Link to={REGISTER_PAGE}>
                <Button type='primary'>Get Started</Button>
              </Link>
            </div>
          </Flex>
        </Header>
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

const Sidebar = ({
  closeSidebar,
  open,
}: {
  open: boolean;
  closeSidebar: () => void;
}) => {
  return (
    <Drawer
      width={'75%'}
      open={open}
      closeIcon={<></>}
      title={
        <Flex justify='space-between' align='center'>
          <Logo />
          <IoIosClose color='red' size={35} onClick={closeSidebar} />
        </Flex>
      }
      className='md:hidden'
    >
      <div className='flex flex-col items-center gap-5 mt-6'>
        <Link to={'/auth/login'}>
          <Button>Login</Button>
        </Link>
        <Link to={'/auth/register'}>
          <Button type='primary'>Get Started</Button>
        </Link>
      </div>
    </Drawer>
  );
};

export default PublicLayout;
