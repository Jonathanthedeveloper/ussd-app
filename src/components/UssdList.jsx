/* eslint-disable react/prop-types */

import List from "./List.jsx";
import {memo} from "react";

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
// eslint-disable-next-line react/display-name
const UssdList = memo(({data, label = "system", action}) => {
    return (
        <ul className="grid gap-5">
            {data.map((datum, index) => {
                return (
                    <List key={index} data={datum} label={label} action={action}/>
                )
            })}
        </ul>
    )
})
export default UssdList