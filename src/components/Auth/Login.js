import React, {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Login.module.css";
import Footer from "../UI/Footer/Footer";
import axios from "axios";
import {useHistory} from "react-router";

const Register = () => {
    const [enteredUsername, setEnteredUsername] = useState("");
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

            setSuccessMessage("Uspešna prijava!");
            return
        }
        if (!success) {

            setSuccessMessage("Korisničko ime i lozinka se ne podudaraju!");
            return
        }

    }

    const enteredUsernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const enteredPasswordHandler = (event) => {
        setEnteredPassword(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const formObj = {
            enteredUsername,
            enteredPassword
        }

        axios.post("http://localhost:5000/users/login", {
            username: enteredUsername,
            password: enteredPassword,
        }).then(res => {

            if(res.data.find(user => user.username === enteredUsername && user.password === enteredPassword)){
                setSuccess(true);
                setShow(true);
                sessionStorage.setItem("username", enteredUsername);
                history.push('/home')
            } else {
                throw new Error('Ne postoji user');
            }

            // console.log(res)
        }).catch(err => {
            setSuccess(false);
            setShow(true);
            console.log(err)});

        setEnteredUsername("");
        setEnteredPassword("");
    }

    const routeChange = () =>{
        history.push('/registracija');
    }

    return (
        <React.Fragment>
            <div className={classes.login}>
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
                    <div className={classes.buttons}>
                    <button type="text" className={classes.submit} onClick={() => sendHandler()}>Prijavi se</button>
                    <button type="text" className={classes.submit} onClick={routeChange}>Registruj se</button>
                    </div>
                    {show && <div className={success ? classes.message : classes.messageInvalid}>{successMessage}</div>}
                </form>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default Register;
