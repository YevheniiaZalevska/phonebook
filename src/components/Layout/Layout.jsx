import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import s from './Layout.module.css';

const Layout = ({ toggleTheme, theme }) => {
  return (
    <div className={s.layout}>
      <AppBar toggleTheme={toggleTheme} theme={theme} />
      <div className={s.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
