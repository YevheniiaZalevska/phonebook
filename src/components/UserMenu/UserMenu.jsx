import { useDispatch, useSelector } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';  

import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.userMenu}>
      <span className={s.welcomeText}>
        <strong>WELCOME, {user?.name?.toUpperCase()}!</strong>
      </span>
      <button className={s.logoutButton} onClick={() => dispatch(logout())}>
        <FiLogOut className={s.icon} />
      </button>
    </div>
  );
};

export default UserMenu;
