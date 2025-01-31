import Contact from '../Contact/Contact'
import s from './ContactList.module.css'
import { selectFilteredContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id || Math.random()}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
};

export default ContactList;