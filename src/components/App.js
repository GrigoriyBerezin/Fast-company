import React, { useState } from "react";
import Users from "./users"
import SearchStatus from "./searchStatus"
import api from "./api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userid) => {
        const newUsers = users.filter((u)=> u._id !== userid)
        setUsers(newUsers)
    };
    const handleToggleBookMark = (id) => {
        setUsers(users.map(user => {
            if (user._id === id) {
                return {...user, bookmark: !user.bookmark}
            } else {
                return user
            }
        }))
        
    }


    return (
        <>
        <SearchStatus length={users.length}/> 
        <Users
        users={users} 
        onDelete={handleDelete}
        onToggleBook={handleToggleBookMark}/>
        </>
    )
};

export default App;