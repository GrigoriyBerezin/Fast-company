import React from "react";
import { useHistory } from "react-router-dom";

const User = ({ match, users }) => {
    const history = useHistory();
    const getUserById = (id) => {
        return users.find((user) => user.id.toString() === id);
    };
    const handleSave = () => {
        history.push("/users");
    };
    const user = getUserById(id);
    return (
        <>
            {" "}
            <h2>{user ? user.label : `Post with id:${id} not found`}</h2>
            <button
                onClick={() => {
                    handleSave();
                }}
            >
                Все Пользователиы
            </button>
        </>
    );
};

export default User;
