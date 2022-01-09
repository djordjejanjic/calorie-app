import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className={classes.navbar}>

                <Link to="/home">Početna</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/logout">Odjavi se</Link>
            </ul>
        </nav>
    );
}

export default Navbar;
