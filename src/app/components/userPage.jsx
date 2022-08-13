import React from "react";
import { useHistory } from "react-router-dom";
import UsersList from "./usersList";

const User = ({ id, users }) => {
    const history = useHistory();
    const getById = (id) => {
        return users.find((user) => user.id.toString() === id);
    };
    const handleSave = () => {
        history.push("/users");
    };
    const user = getById(id);
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
