import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation(); 

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={`${s.link} ${location.pathname === '/' ? s.active : ''}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/contacts"
        className={`${s.link} ${location.pathname === '/contacts' ? s.active : ''}`}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
