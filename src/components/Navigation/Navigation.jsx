import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiUser } from 'react-icons/fi';  
import s from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={`${s.link} ${location.pathname === '/' ? s.active : ''}`}
      >
        <FiHome className={s.icon} />
      </NavLink>
      <NavLink
        to="/contacts"
        className={`${s.link} ${location.pathname === '/contacts' ? s.active : ''}`}
      >
        <FiUser className={s.icon} />  
      </NavLink>
    </nav>
  );
};

export default Navigation;
