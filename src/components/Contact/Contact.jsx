import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { selectDeletingIds } from '../../redux/contacts/selectors';
import EditContactModal from '../EditContactModal/EditContactModal';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deletingIds = useSelector(selectDeletingIds);
  const isDeleting = deletingIds.includes(id);
  const [isEditing, setIsEditing] = useState(false);

  const openEditModal = () => {
    if (!id || !name || !number) {
      
      return;
    }
    setIsEditing(true);
  };

  return (
    <li className={s.item}>
      <div className={s.details}>
        <FaUser /> {name}
        <FaPhoneAlt /> {number}
      </div>

      <button className={s.editBtn} onClick={openEditModal}>Edit</button>
      <button className={s.deleteBtn} onClick={() => dispatch(deleteContact(id))} disabled={isDeleting}>
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>

      {isEditing && (
        <EditContactModal
          id={id}
          name={name}
          number={number}
          onClose={() => setIsEditing(false)}
        />
      )}
    </li>
  );
};

export default Contact;
