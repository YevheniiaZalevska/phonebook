import { useFormik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: { name: '', number: '' },
    validationSchema: Yup.object({
      name: Yup.string().min(3).max(50).required('Required'),
      number: Yup.string().min(3).max(50).required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit({ id: nanoid(), ...values });
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input type="text" {...formik.getFieldProps('name')} className={styles.input} />
      </label>
      {formik.touched.name && formik.errors.name ? <div className={styles.error}>{formik.errors.name}</div> : null}
      
      <label className={styles.label}>
        Number
        <input type="text" {...formik.getFieldProps('number')} className={styles.input} />
      </label>
      {formik.touched.number && formik.errors.number ? <div className={styles.error}>{formik.errors.number}</div> : null}

      <button type="submit" className={styles.button}>Add Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;