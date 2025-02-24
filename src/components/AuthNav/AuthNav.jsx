import { NavLink, useLocation } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  const location = useLocation();

  return (
    <div className={s.container}>
      <NavLink
        to="/register"
        className={`${s.authButton} ${location.pathname === '/register' ? s.activeButton : ''}`}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={`${s.authButton} ${location.pathname === '/login' ? s.activeButton : ''}`}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
