import classes from "./Navbar.module.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul className={classes.navbar}>

                <Link to="/">Početna</Link>
                <Link to="/kontakt">Kontakt</Link>

            </ul>
        </nav>
    );
}

export default Navbar;