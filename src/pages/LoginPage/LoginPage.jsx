import LoginForm from '../../components/LoginForm/LoginForm';
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.container}>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
