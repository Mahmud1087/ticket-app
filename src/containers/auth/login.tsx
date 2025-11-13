/* eslint-disable @typescript-eslint/no-explicit-any */
import AuthForm from '../../components/form/auth_form';
import { useAuth } from '../../store/auth/context';
import { DASHBOARD_PAGE } from '../../config/routes';
import { useNavigate } from 'react-router-dom';
import { useAlertContext } from '../../store/alert';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { open } = useAlertContext();

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await login(email, password);
      navigate(DASHBOARD_PAGE);
      open({ message: 'Login successful', type: 'success' });
    } catch (err: any) {
      open({ message: err.message || 'Login failed', type: 'error' });
    }
  };

  return (
    <div>
      <AuthForm mode='login' onSubmit={handleSubmit} />
    </div>
  );
};
export default Login;
