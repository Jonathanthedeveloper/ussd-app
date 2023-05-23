/* eslint-disable react/prop-types */

import List from "./List.jsx";
function UssdList ({data}) {
    return (
        <ul className="grid gap-5">
            {data.map((datum, index) => {
                return (
                    <List key={index} data={datum}/>
                )
            })}
        </ul>
    )
}

export default UssdList