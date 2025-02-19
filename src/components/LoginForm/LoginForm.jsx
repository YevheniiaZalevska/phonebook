import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from 'react-icons/fa'; // 🔥 Иконки
import s from './LoginForm.module.css';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values)).catch(() => {
      toast.error('Invalid login or password');
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Email:
          <div className={s.inputWrapper}>
            <FaEnvelope className={s.icon} /> {/* 📧 Иконка почты */}
            <Field className={s.input} type="email" name="email" autoComplete="email" />
          </div>
          <ErrorMessage className={s.error} name="email" component="div" />
        </label>

        <label className={s.label}>
          Password:
          <div className={s.inputWrapper}>
            <FaLock className={s.icon} /> {/* 🔒 Иконка пароля */}
            <Field
              className={s.input}
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
            />
            <button
              type="button"
              className={s.togglePassword}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <ErrorMessage className={s.error} name="password" component="div" />
        </label>

        <button className={s.button} type="submit">
          Log In
        </button>

        <p className={s.link}>
          No account yet? <Link to="/register">Sign up here</Link>.
        </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;
