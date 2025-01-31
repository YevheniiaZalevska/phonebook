import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css'


const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.details}>
        <div>
          <span className={s.icon}>
            <FaUser />
          </span>
          <span className={s.name}>{name}</span>
        </div>
        <div>
          <span className={s.icon}>
            <FaPhoneAlt />
          </span>
          <span className={s.number}>{number}</span>
        </div>
      </div>
      <button
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;