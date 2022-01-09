import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {

    const logoutHandler = () => {
        sessionStorage.removeItem("username");
        console.log('');
    }

    return (
        <nav>
            <ul className={classes.navbar}>

                <Link to="/home">Početna</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/" onClick={logoutHandler}>Odjavi se</Link>
            </ul>
        </nav>
    );
}

export default Navbar;
