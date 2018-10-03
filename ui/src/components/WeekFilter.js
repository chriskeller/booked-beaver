import React from "react";

/**
 *
 *
 * @param {Object[]} weeks - The array of week objects used for the dropdown component.
 * @param {string} week.item - The dropdown item text.
 * @param {} week.filter - The filter for this dropdown item.
 * @returns
 */
const WeekFilter = ({ weeks, weekFilter }) => {

    return (
        <div className="btn-group"> 
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Select period
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {weeks.map((week, index) => (
                    <button key={index} className="dropdown-item" type="button" onClick={() => weekFilter(week.filter)}>{week.item}</button>
                ))}
            </div>
        </div>

    );
}

export default WeekFilter
