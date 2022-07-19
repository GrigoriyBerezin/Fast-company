import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
const User = ({ users, ...rest }) => {
    return (
        <>
            <tr>
                <td>{users.name}</td>
                <td>
                    {users.qualities.map((user) => (
                        <Qualitie
                            key={user._id}
                            name={user.name}
                            color={user.color}
                            id={user._id}
                        />
                    ))}
                </td>
                <td>{users.profession.name}</td>
                <td>{users.completedMeetings}</td>
                <td>{users.rate}/5</td>
                <td>
                    <BookMark
                        status={users.bookmark}
                        id={users._id}
                        bookMark={rest.onToggleBook}
                    />
                </td>
                <td>
                    <button
                        className='badge bg-danger'
                        onClick={() => rest.onDelete(users._id)}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        </>
    );
};

export default User;
