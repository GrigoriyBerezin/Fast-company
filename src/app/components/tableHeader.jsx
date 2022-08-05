import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            });
        } else {
            onSort({ path: item, order: "asc" });
        }
    };
    const Arrow = (selectedSort, selectedArrow) => {
        if (selectedSort.path === selectedArrow) {
            if (selectedSort.order === "asc") {
                return <span className="bi bi-caret-up-fill" />;
            } else {
                return <span className="bi bi-caret-down-fill" />;
            }
        }
        return null;
    };
    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        // const
                        // allArrow={(selectedSort, columns[column].path)}
                        key={column}
                        onClick={
                            columns[column].path
                                ? () => handleSort(columns[column].path)
                                : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col"
                    >
                        {columns[column].name}
                        {Arrow(selectedSort, columns[column].path)}
                        {/* {Arrow(allArrow)} */}
                    </th>
                ))}
                {/* <th scope="col">Качества</th>
                <th onClick={() => handleSort("profession.name")} scope="col">
                    Профессия
                </th>
                <th onClick={() => handleSort("completedMeetings")} scope="col">
                    Встретился, раз
                </th>
                <th onClick={() => handleSort("rate")} scope="col">
                    Оценка
                </th>
                <th onClick={() => handleSort("bookmark")} scope="col">
                    Избранное
                </th>
                <th /> */}
            </tr>
        </thead>
    );
    // const arrowDown = () => {
    //     return <span className="bi bi-caret-down-fill"/>;
    // };
    // const arrowUp = () => {
    //     return <span className="bi bi-caret-up-fill"/>;
    // };
};

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
    // allArrow: PropTypes.func.isRequired
};

export default TableHeader;
