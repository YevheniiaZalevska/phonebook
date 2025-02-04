import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { register } from '../../redux/auth/operations';

import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import s from './RegistrationForm.module.css';

const registrationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'At least 6 characters').required('Required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registrationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <label className={s.label}>
          Name:
          <Field className={s.input} type="text" name="name" />
          <ErrorMessage className={s.error} name="name" component="div" />
        </label>
        <label className={s.label}>
          Email:
          <Field className={s.input} type="email" name="email" autoComplete="email" />
          <ErrorMessage className={s.error} name="email" component="div" />
        </label>
        <label className={s.label}>
          Password:
          <div className={s.passwordWrapper}>
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
          Register
        </button>

        <p className={s.link}>
          Already have an account? <Link to="/login">Log in here</Link>.
        </p>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
