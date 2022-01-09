import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Register.module.css";
import Footer from "../UI/Footer/Footer";
import axios from "axios";
import {useHistory} from "react-router";

const Register = () => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const [success, setSuccess] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [show, setShow] = useState(false);

    const history = useHistory();


    useEffect(() => {
        sendHandler();
    }, [success, successMessage, show])

    const sendHandler = () => {

        if (success) {

            setSuccessMessage("Uspešna registracija!");
            return
        }
        if (!success) {

            setSuccessMessage("Neuspela registracija! Lozinka mora imati više od 6 karaktera, a korisničko ime više od 3.");
            return
        }

    }

    const enteredUsernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const enteredEmailHandler = (event) => {
        setEnteredEmail(event.target.value);
    }
    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const formObj = {
            enteredUsername,
            enteredEmail,
            enteredPassword
        }

        axios.post("http://localhost:5000/users", {
            username: enteredUsername,
            password: enteredPassword,
            email: enteredEmail
        }).then(res => {
            setSuccess(true);
            setShow(true);
            history.push('/')
            console.log(res)}).catch(err => {
            setSuccess(false);
            setShow(true);
            console.log(err)});

        setEnteredUsername("");
        setEnteredEmail("");
        setEnteredPassword("");
    }

    const routeChange = () =>{
        history.push('/');
    }

    return (
        <React.Fragment>

            <div className={classes.register}>
                <form onSubmit={onSubmitHandler}>
                    <div className={classes.input_container}>
                        <div className={classes.ic1}>
                            <label>Korisničko ime</label>
                            <input id="firstname" className={classes.input} type="text" placeholder=" "
                                   onChange={enteredUsernameHandler} value={enteredUsername} name="from_name" required/>

                        </div>
                    </div>
                    <div className={classes.input_container}>
                        <div className={classes.ic1}>
                            <label>Lozinka</label>
                            <input id="password" className={classes.input} type="password" placeholder=" "
                                   onChange={enteredPasswordHandler} value={enteredPassword} name="password" required/>

                        </div>
                    </div>
                    <div className={classes.input_container}>
                        <div className={classes.ic1}>
                            <label>Email</label>
                            <input id="email" className={classes.input} type="text" placeholder=" "
                                   onChange={enteredEmailHandler} value={enteredEmail} name="email" required/>
                        </div>
                    </div>
                    <div className={classes.buttons}>
                    <button type="text" className={classes.submit} onClick={() => sendHandler()}>Registruj se</button>
                        <button type="text" className={classes.submit} onClick={routeChange}>Nazad</button>
                    </div>
                    {show && <div className={success ? classes.message : classes.messageInvalid}>{successMessage}</div>}
                </form>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Register;
