import React, { useState } from "react";
import api from "./api";

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userid) => {
        setUsers((prevState) => prevState.filter((user) => user !== userid));
    };

    const renderPhrase = (number) => {
        number = users.length;
        if (users.length > 4)
            return `${number} человек тусанут с тобой сегодня`;
        else return `${number} человека тусанут с тобой сегодня`;
    };
    if (users.length === 0) {
        return (
            <h2>
                <span className='badge bg-danger'>
                    Никто с тобой не тусанет
                </span>
            </h2>
        );
    }
    return (
        <>
            <h2>
                <span className='badge bg-primary'>{renderPhrase()}</span>
            </h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Имя</th>
                        <th scope='col'>Профессия</th>
                        <th scope='col'>Качества</th>
                        <th scope='col'>Встретился, раз</th>
                        <th scope='col'>Оценка</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.profession.name}</td>
                            {user.qualities.map((qualitie) => (
                                <span
                                    key={qualitie._id}
                                    className={`badge bg-${qualitie.color} m-2`}
                                >
                                    {qualitie.name}
                                </span>
                            ))}
                            <td>{user.completedMeetings}</td>
                            <td>{user.rate}/5</td>
                            <td>
                                <button
                                    className='btn badge btn-danger'
                                    onClick={() => handleDelete(user)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Users;
