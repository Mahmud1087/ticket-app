// src/components/ProtectedRoute.tsx
import React, { type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../store/auth/context';
import { Flex } from 'antd';
import { GoDotFill } from 'react-icons/go';
import { LOGIN_PAGE } from '../../config/routes';

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen w-full'>
        <Flex align='center' gap={6} vertical>
          <Flex align='center' gap={5} className='text-4xl'>
            <GoDotFill
              className='animate-bounce text-green-600'
              style={{ animationDelay: '0s' }}
            />
            <GoDotFill
              className='animate-bounce text-orange-500'
              style={{ animationDelay: '0.2s' }}
            />
            <GoDotFill
              className='animate-bounce text-gray-500'
              style={{ animationDelay: '0.4s' }}
            />
          </Flex>
          <p className='text-lg md:text-xl text-gray-700 mt-2'>
            Authenticating...
          </p>
        </Flex>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={LOGIN_PAGE} replace />;
  }

  return children;
};
