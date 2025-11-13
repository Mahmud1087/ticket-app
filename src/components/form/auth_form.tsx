/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Form, Input, Button, Typography, Flex } from 'antd';
import type { FormProps } from 'antd';
import { Link } from 'react-router-dom';
import { LOGIN_PAGE, REGISTER_PAGE } from '../../config/routes';
import PublicLayout from '../../layout/public-layout';
import { useAuth } from '../../store/auth/context';
import { LoadingOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface AuthFormProps {
  mode: 'login' | 'register';
  onSubmit: (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }) => Promise<void>;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit }) => {
  const [form] = Form.useForm();
  const { loading } = useAuth();

  const handleFinish: FormProps['onFinish'] = async (values) => {
    try {
      await onSubmit(values);
      // form.resetFields();
    } catch (err: any) {
      console.error(err.message || 'Something went wrong');
    }
  };

  return (
    <PublicLayout>
      <div className='flex items-center justify-center min-h-screen bg-gray-50'>
        <div className='w-full max-w-md bg-white p-8 mx-4 rounded-lg shadow-md'>
          <Title level={3} className='text-center mb-6'>
            {mode === 'login' ? 'Welcome Back' : 'Create an Account'}
          </Title>

          <Form form={form} layout='vertical' onFinish={handleFinish}>
            {mode === 'register' && (
              <Form.Item
                label='Name'
                name='name'
                rules={[
                  { required: true, message: 'Please enter your name', min: 4 },
                ]}
              >
                <Input placeholder='Mahmud Abdulazeez' size='large' />
              </Form.Item>
            )}

            <Form.Item
              label='Email'
              name='email'
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
            >
              <Input placeholder='example@email.com' size='large' />
            </Form.Item>

            <Form.Item
              label='Password'
              name='password'
              rules={[
                { required: true, message: 'Please enter your password' },
                { min: 6, message: 'Password must be at least 6 characters' },
              ]}
            >
              <Input.Password placeholder='Enter password' size='large' />
            </Form.Item>

            {mode === 'register' && (
              <Form.Item
                label='Confirm Password'
                name='confirmPassword'
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Please confirm your password' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error('Passwords do not match')
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder='Confirm password' size='large' />
              </Form.Item>
            )}

            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                size='large'
                block
                className='mt-2'
              >
                {loading ? (
                  <Flex justify='space-between' align='center' gap={8}>
                    <LoadingOutlined />
                    <span>Processing ...</span>
                  </Flex>
                ) : mode === 'login' ? (
                  'Login'
                ) : (
                  'Register'
                )}
              </Button>
            </Form.Item>
          </Form>

          <div className='text-center'>
            <Text>
              {mode === 'login'
                ? "Don't have an account?"
                : 'Already have an account?'}
            </Text>
            <Link
              to={mode === 'login' ? REGISTER_PAGE : LOGIN_PAGE}
              className='ml-1 text-blue-600'
            >
              {mode === 'login' ? 'Sign up' : 'Login'}
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default AuthForm;
