import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FiHome, FiUser } from 'react-icons/fi'; // 📌 Используем FiUser для "Contacts"
import s from './Navigation.module.css';

const Navigation = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn); // ✅ Проверка на авторизацию

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={`${s.link} ${location.pathname === '/' ? s.active : ''}`}
      >
        <FiHome className={s.icon} />
      </NavLink>
      
      {/* 🔥 "Contacts" отображается ТОЛЬКО если юзер вошел */}
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={`${s.link} ${location.pathname === '/contacts' ? s.active : ''}`}
        >
          <FiUser className={s.icon} />
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

