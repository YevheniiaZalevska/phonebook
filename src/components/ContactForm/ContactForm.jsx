import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import { useId } from "react";
import * as Yup from "yup";

import s from './ContactForm.module.css';

const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required")
});

const initialValues = {
    id: "",
    name: "",
    number: "",
};



const ContactForm = ({ onAdd }) => {



    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, action) => {


        onAdd({
            id: nanoid(),
            name: values.name,
            number: values.number,

        });

        action.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}
            validationSchema={ContactFormSchema}>
            <Form className={s.form}>
                <div className={s.name_container}>
                    <label className={s.name} htmlFor={nameFieldId}>Name</label>
                    <Field className={s.input} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage className={s.error} name="name" component="span" />
                </div>

                <div className={s.name_container}>
                    <label className={s.name} htmlFor={numberFieldId}>Number</label>
                    <Field className={s.input} type="text" name="number" id={numberFieldId} />
                    <ErrorMessage className={s.error} name="number" component="span" />
                </div>

                <button className={s.btn} type="submit">Add contact</button>
            </Form >



        </Formik>

    )

}

export default ContactForm