import React from "react";

const SearchStatus = ({ length }) => {
    const renderPhrase = (number) => {
        number = length;
        if (length > 4)
            return (
                <h2>
                    <span className='badge bg-primary'>
                        {number} человек тусанут с тобой сегодня
                    </span>
                </h2>
            );
        else
            return (
                <h2>
                    <span className='badge bg-primary'>
                        {number} человека тусанут с тобой сегодня;
                    </span>
                </h2>
            );
    };
    if (length === 0) {
        return (
            <h2>
                <span className='badge bg-danger'>
                    Никто с тобой не тусанет
                </span>
            </h2>
        );
    }
    return renderPhrase();
};

export default SearchStatus;
