import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FiSun, FiMoon } from 'react-icons/fi'; 
import s from './AppBar.module.css';

const AppBar = ({ toggleTheme, theme }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
     <div className={s.content}>
      <div className={s.left}>
        <Navigation />
      </div>

      <button className={s.themeToggle} onClick={toggleTheme}>
        {theme === 'light' ? <FiMoon className={s.icon} /> : <FiSun className={s.icon} />}
      </button>

      <div className={s.right}>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </div>
    </header>
  );
};

export default AppBar;
