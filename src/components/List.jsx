/* eslint-disable react/prop-types */

import {IoCall} from "react-icons/all.js";


/**
 *
 * @param {object} data
 * @param {string} label
 * @param {function} action
 * @returns {JSX.Element}
 * @constructor
 */
function List({data, label, action}) {

    function handleClick(e) {
        const { label, title, code, id } = e.currentTarget.dataset;

        if (label !== "user") return;


        action({ id, title, code });
    }


    return (
        <li className="flex items-center between bg-gray-50 rounded-md px-5 py-2 gap-3 shadow-sm w-full">
            <div className="" data-title={data.title} data-code={data.code} data-label={label} data-id={data.id} onClick={handleClick}>
                <h6 className="capitalize">{data.title}</h6>
                <p className="text-gray-500 text-sm">{data.code}</p>
            </div>

            <a href={`tel:${data.code.replaceAll("#", "%23")}`} className="text-[#010c80] p-2 ml-auto">
                <IoCall size={20}/>
            </a>
        </li>
    );
}


export default List;

