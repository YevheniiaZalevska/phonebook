import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import s from './Contact.module.css'


const Contact = ({ data: { id, name, number }, onDelete }) => {

    return (
        <div className={s.card}>
            <div>
                <p><FaUser className={s.text} size="18px" />{name}</p>
                <p><FaPhone className={s.text} size="20px" />{number}</p>
            </div>
            <button className={s.btn} onClick={() => onDelete(id)}>Delete</button>

        </div>
    );


}

export default Contact