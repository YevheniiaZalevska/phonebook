import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import PropTypes from 'prop-types';
import s from './EditContactModal.module.css';

const EditContactModal = ({ id, name = '', number = '', onClose }) => {
  const dispatch = useDispatch();
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  if (!id) {
    return null;
  }

  const handleSave = () => {
    dispatch(editContact({ id, updatedContact: { name: newName, number: newNumber } }));
    onClose();
  };

  return (
    <div className={s.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={s.modal}>
        <h2>Edit Contact</h2>
        <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
        <input type="text" value={newNumber} onChange={e => setNewNumber(e.target.value)} />
        <div className={s.buttons}>
          <button className={s.saveBtn} onClick={handleSave}>Save</button>
          <button className={s.cancelBtn} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

EditContactModal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default EditContactModal;
