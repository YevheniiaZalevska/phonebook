import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import s from './Layout.module.css';

const Layout = () => {
  return (
    <div className={s.layout}>
      <AppBar />
      <div className={s.mainContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
