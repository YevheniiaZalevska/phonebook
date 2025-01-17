import Contact from '../Contact/Contact'
import s from './ContactList.module.css'

const ContactList = ({ numbers, onDelete }) => {

    return (
        <>
            <ul>
                {numbers.map((number) => (
                    <li className={s.list} key={number.id}>
                        <Contact data={number} onDelete={onDelete} />
                    </li>
                ))}
            </ul>
        </>
    )

}

export default ContactList