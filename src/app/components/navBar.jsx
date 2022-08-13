import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <span>
            <Link to="/" className="m-2">
                Main
            </Link>
            <Link to="/login" className="m-2">
                Login
            </Link>
            <Link to="/users" className="m-2">
                Users
            </Link>
        </span>
    );
};

export default NavBar;
