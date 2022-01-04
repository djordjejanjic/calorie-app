import Navbar from "../Navbar/Navbar";
import React, {useEffect, useState} from "react";
import Card from "../UI/Card";
import classes from "./Contact.module.css";
import emailjs from "emailjs-com";
import Footer from "../UI/Footer/Footer";

const Contact = () => {

    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    const [success, setSuccess] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {
        sendHandler();
    }, [success, successMessage])

    const sendHandler = () => {
        if (success) {
            setSuccessMessage("Uspesno poslato!");
            return
        }
        if (!success) {
            setSuccessMessage("Neuspesno poslato!");
            return
        }
    }

    const enteredNameHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const enteredEmailHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    const enteredMessageHandler = (event) => {
        setEnteredMessage(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const formObj = {
            enteredName,
            enteredEmail,
            enteredMessage
        }

        emailjs.sendForm('service_0bugerl', 'template_y28q0yj', event.target, 'user_wrMyxEwSlGax8gYz6evc1').then(result => {
            console.log(result.text);
            setSuccess(true);
            setShow(true);
        }, (error) => {
            console.log(error.text);
            setSuccess(false);
            setShow(true);
        })


        setEnteredName("");
        setEnteredEmail("");
        setEnteredMessage("");
    }

    return (
        <React.Fragment>
            <Navbar/>
            <div className={classes.contact}>
                <form onSubmit={onSubmitHandler}>
                    <div className={classes.input_container}>
                        <div className={classes.ic1}>
                            <label>Ime i prezime</label>
                            <input id="firstname" className={classes.input} type="text" placeholder=" " onChange={enteredNameHandler} value={enteredName} name="from_name" required/>

                        </div>
                    </div>
                    <div className={classes.input_container}>
                        <div className={classes.ic1}>
                            <label>Email</label>
                            <input id="email" className={classes.input} type="text" placeholder=" " onChange={enteredEmailHandler} value={enteredEmail} name="email" required/>
                        </div>
                    </div>
                    <div className={classes.input_container}>
                        <div className={classes.ic1}>
                            <label>Poruka</label>
                            <textarea id="message" className={classes.input} type="text" placeholder=" " onChange={enteredMessageHandler} value={enteredMessage} name="message" required/>
                        </div>
                    </div>
                    <button type="text" className={classes.submit} onClick={sendHandler}>Pošalji</button>
                    {show && <div className={success ? classes.message : classes.messageInvalid}>{successMessage}</div>}
                </form>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default Contact;
