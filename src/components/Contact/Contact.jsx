import { useDispatch, useSelector } from 'react-redux';

import { selectDeletingIds } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deletingIds = useSelector(selectDeletingIds);
  const isDeleting = deletingIds.includes(id);

  const handleDelete = () => {
    if (!isDeleting) {
      dispatch(deleteContact(id));
    }
  };

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
        onClick={handleDelete}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}{' '}
      </button>
    </li>
  );
};

export default Contact;