import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact, deleteContact } from '../../redux/contacts/operations';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleSave = () => {
    if (newName.trim() === '' || newNumber.trim() === '') {
      alert('Fields cannot be empty!');
      return;
    }

    dispatch(editContact({ id, updatedContact: { name: newName, number: newNumber } }));
    setIsEditing(false);
  };

  return (
    <li className={s.item}>
      {isEditing ? (
        <div className={s.editContainer}>
          <input
            className={s.input}
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            className={s.input}
            type="text"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
          <button className={s.saveBtn} onClick={handleSave}>Save</button>
          <button className={s.cancelBtn} onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
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
          <div className={s.buttons}>
            <button className={s.editBtn} onClick={() => setIsEditing(true)}>Edit</button>
            <button className={s.deleteBtn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Contact;
