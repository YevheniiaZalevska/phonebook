import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading, selectError, selectTotalContacts } from '../../redux/contacts/selectors';

import { FaAddressBook } from 'react-icons/fa'; // 📌 Иконка контактов
import s from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const totalContacts = useSelector(selectTotalContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      {/* 🔥 Карточка с количеством контактов */}
      <div className={s.counterBox}>
        <FaAddressBook className={s.icon} />
        <span>Now you have saved contacts: <strong>{totalContacts}</strong></span>
      </div>

      <SearchBox />
      {isLoading ? (
        <p className={s.loader}>Loading... Please wait a little</p>
      ) : error ? (
        <p className={s.error}>Error: {error}</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
};

export default ContactsPage;
