/* eslint-disable react/prop-types */

import List from "./List.jsx";

/**
 * Returns a bunch of li's wrapped in a ul tag
 * @param {array} data
 * @param {string} label
 * @param {function} action
 * @param {function} setDefaultValue
 * @param {function} setFormMode
 * @returns {JSX.Element} List
 * @constructor
 */
function UssdList({data, label = "system", action}) {
    return (
        <ul className="grid gap-5">
            {data.map((datum, index) => {
                return (
                    <List key={index} data={datum} label={label} action={action}/>
                )
            })}
        </ul>
    )
}

export default UssdList