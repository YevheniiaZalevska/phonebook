import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles.contactItem}>
    <p className={styles.contactText}>{name}: {number}</p>
    <button onClick={() => onDelete(id)} className={styles.deleteButton}>Delete</button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;