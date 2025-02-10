import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing, selectIsLoggedIn } from './redux/auth/selectors';

import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isAppReady, setIsAppReady] = useState(false);

  // 🌓 Состояние темы (из localStorage)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // 🌓 Устанавливаем тему в body и сохраняем в localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 🌓 Функция для переключения темы
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isRefreshing && isLoggedIn !== null) {
      setIsAppReady(true);
    }
  }, [isRefreshing, isLoggedIn]);

  if (!isAppReady) {
    return null;
  }

  return isRefreshing ? null : (
    <>
      <Routes>
        <Route path="/" element={<Layout toggleTheme={toggleTheme} theme={theme} />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute>
                <RegistrationPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element="Not Found Such Page" />
      </Routes>

      <Toaster position="top-center" />
    </>
  );
};

export default App;
