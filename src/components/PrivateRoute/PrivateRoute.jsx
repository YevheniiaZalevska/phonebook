import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import { ClipLoader } from 'react-spinners';

import s from './PrivateRoute.module.css';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) {
    return <div className={s.loader}><ClipLoader size={35} color="#007bff" /></div>;
  }

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
