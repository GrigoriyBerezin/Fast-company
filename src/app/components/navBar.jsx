import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <ul className="nav">
            <Link className="m-2" to="/">
                Main
            </Link>

            <Link className="m-2" to="/login">
                Login
            </Link>

            <Link className="m-2" to="/users">
                Users
            </Link>
        </ul>
    );
};

export default NavBar;
