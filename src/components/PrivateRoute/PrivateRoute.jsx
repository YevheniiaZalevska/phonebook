import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../../redux/auth/selectors';

import s from './PrivateRoute.module.css';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <div className={s.loader}>Loading...</div>;
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
