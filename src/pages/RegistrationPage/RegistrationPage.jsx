import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={s.container}>
      <h2 className={s.contH2}>Register</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
