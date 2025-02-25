import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact, deleteContact } from '../../redux/contacts/operations';
import { FaUser, FaPhoneAlt, FaPen } from 'react-icons/fa';
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
        <div className={s.container}>
          <input className={s.input} type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
          <input className={s.input} type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
          <div className={s.buttons}>
            <button className={s.saveBtn} onClick={handleSave}>SAVE</button>
            <button className={s.cancelBtn} onClick={() => setIsEditing(false)}>CANCEL</button>
          </div>
        </div>
      ) : (
        <div className={s.container}>
          <div className={s.details}>
            <div className={s.info}>
              <span className={s.icon}><FaUser /></span>
              <div className={s.nameContainer}>
                <span className={name.length > 12 ? s.scrollingText : ''}>{name}</span>
              </div>
            </div>
            <div className={s.info}>
              <span className={s.icon}><FaPhoneAlt /></span>
              <span className={s.number}>{number}</span>
            </div>
          </div>
          {!isEditing && (
            <div className={s.buttons}>
              <button className={s.editBtn} onClick={() => setIsEditing(true)}>
                <FaPen />
              </button>
              <button className={s.deleteBtn} onClick={() => dispatch(deleteContact(id))}>DELETE</button>
            </div>
          )}
        </div>
      )}
    </li>
  );
};

export default Contact;

