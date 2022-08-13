import React from "react";
import { Link } from "react-router-dom";

const UsersList = ({ users }) => {
    return (
        <>
            {users.map((user) => (
                <Link key={user.id} to={`users/${user.id}`}>
                    <h3>{user.label}</h3>
                </Link>
            ))}
        </>
    );
};

export default UsersList;
