import s from './App.module.css'
import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"


const App = () => {

  return (
    <div className={s.contanier}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.contacts}>Contacts</h2>
      <SearchBox />
      <ContactList />
    </div>
  )
}

export default App