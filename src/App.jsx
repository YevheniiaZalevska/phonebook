import s from './App.module.css'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"


import { useEffect, useState } from 'react'

const App = () => {

  const [numbers, setNumbers] = useState(() => {
    const savedContact = window.localStorage.getItem("saved-contacts");
    if (savedContact !== null) {
      return JSON.parse(savedContact);
    }
  });



  const [search, setSearch] = useState('');

  const addContact = (newContact) => {
    setNumbers((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setNumbers((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    })
  }

  const searchContacts = numbers.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(numbers));
  }, [numbers]);



  return (
    <div className={s.contanier}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList numbers={searchContacts} onDelete={deleteContact} />
    </div>
  )
}

export default App