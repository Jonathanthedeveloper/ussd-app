/* eslint-disable react/prop-types */

import { IoCall } from "react-icons/all.js";

function List({ data }) {
    return (
        <li className="flex items-center between bg-gray-50 rounded-md px-5 py-2 gap-3 shadow-sm">
            <div className="grow">
                <h6 className="capitalize">{data.title}</h6>
                <p className="text-gray-500 text-sm">{data.code}</p>
            </div>

            <a href={`tel:${data.code.replaceAll("#", "%23")}`} className="text-[#010c80] p-2">
                <IoCall size={20} />
            </a>
        </li>
    );
}


export default List;
