import React from "react";

const BookMark = ({ status, ...rest }) => {
    if (status === false) {
        return (
            <button onClick={() => rest.bookMark(rest.id)}>
                <span className='bi bi-bell'></span>
            </button>
        );
    } else if (status === true) {
        return (
            <button onClick={() => rest.bookMark(rest.id)}>
                <span className='bi bi-bell-fill'></span>
            </button>
        );
    }
};

export default BookMark;
