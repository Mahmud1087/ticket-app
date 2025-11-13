/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthForm from '../../components/form/auth_form';
import { useAuth } from '../../store/auth/context';
import { LOGIN_PAGE } from '../../config/routes';
import { useNavigate } from 'react-router-dom';
import { useAlertContext } from '../../store/alert';

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const { open } = useAlertContext();

  const handleSubmit = async ({
    email,
    name,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      await register(name, email, password);
      navigate(LOGIN_PAGE);
      open({
        message: 'Registration successful, Please login',
        type: 'success',
      });
    } catch (err: any) {
      open({ message: err.message || 'Registration failed', type: 'error' });
    }
  };

  return (
    <div>
      <AuthForm mode='register' onSubmit={handleSubmit} />
    </div>
  );
};
export default Register;
