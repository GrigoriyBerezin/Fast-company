import React from "react";
const Qualitie = ({ color, name, _id }) => {
    return (
        <span key={_id} className={`badge bg-${color} m-2`}>
            {name}
        </span>
    );
};
export default Qualitie;
