import { Button, Drawer, Flex, Layout } from 'antd';
import Logo from '../components/common/logo';
import { BiLogOut } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import { LANDING_PAGE } from '../config/routes';
import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { RiMenu3Fill } from 'react-icons/ri';
import { nav_items } from '../utils/data';

const { Header, Content, Sider } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [openSidebar, setOpenSidebar] = useState(false);

  const showSidebar = () => {
    setOpenSidebar(true);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    zIndex: 2,
    insetInlineStart: 0,
    top: '5rem',
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
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

            <div className='hidden md:block'>
              <Button
                type='primary'
                style={{
                  background: 'red',
                }}
                size='large'
                onClick={() => navigate(LANDING_PAGE)}
              >
                <span className='font-medium'>Logout</span>
                <BiLogOut size={23} />
              </Button>
            </div>
          </Flex>
        </Header>
        <Layout hasSider>
          <Sider style={siderStyle} className='hidden md:block'>
            <section className='flex flex-col justify-between h-4/5'>
              <div className='mt-14 px-6 flex flex-col gap-5'>
                {nav_items.map((item, i) => {
                  return (
                    <div
                      onClick={() => navigate(item.link)}
                      key={i}
                      className={`cursor-pointer text-gray-300 py-2 px-3 flex items-center gap-4 rounded-lg transition-all ${
                        pathname === item.link
                          ? 'bg-blue-700 text-white'
                          : 'bg-transparent'
                      }`}
                    >
                      <item.icon className='text-xl' />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>
              <Flex
                style={{
                  padding: '0 24px',
                }}
                align='center'
              >
                <Flex vertical style={{ color: 'white' }}>
                  <h3 className='text-lg font-medium'>Mahmud</h3>
                  <p className='text-gray-300 italic'>mahmud@mail.com</p>
                </Flex>
              </Flex>
            </section>
          </Sider>
          <Layout>
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                overflow: 'initial',
              }}
              className='relative md:left-52 md:w-[83%]'
            >
              {children}
            </Content>
          </Layout>
        </Layout>
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
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
      <section className='flex flex-col justify-between w-full h-full'>
        <div className='mt-5 px-6 flex flex-col gap-5'>
          {nav_items.map((item, i) => {
            return (
              <div
                key={i}
                className={`py-2 px-3 flex items-center gap-4 rounded-lg ${
                  pathname === item.link
                    ? 'bg-blue-700 text-white'
                    : 'bg-transparent'
                }`}
                onClick={() => navigate(item.link)}
              >
                <item.icon className='text-xl' />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>

        <Flex
          style={{
            padding: '0 24px',
          }}
          align='center'
        >
          <Flex vertical>
            <h3 className='text-lg font-medium'>Mahmud Abdulazeez</h3>
            <p className='text-gray-600 italic'>mahmud@mail.com</p>
          </Flex>
        </Flex>
      </section>
    </Drawer>
  );
};

export default DashboardLayout;
