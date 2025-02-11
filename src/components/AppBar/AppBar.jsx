import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './AppBar.module.css';

const AppBar = ({ toggleTheme, theme }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.left}>
        <Navigation />
      </div>

      {/* 🌓 Кнопка переключения темы */}
      <button className={s.themeToggle} onClick={toggleTheme}>
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <div className={s.right}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};

export default AppBar;
