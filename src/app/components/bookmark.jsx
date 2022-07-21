import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <button {...rest}>
            <span
                className={"bi bi-square" + (status ? "bi bi-square-fill" : "")}
            ></span>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool
};
export default BookMark;
