import { IoCall } from "react-icons/all.js";
import PropTypes from "prop-types";

function List({ data }) {
    return (
        <li className="flex items-center between bg-gray-50 rounded-md px-5 py-2 gap-3 shadow-sm">
            <div className="grow">
                <h6 className="capitalize">{data.title}</h6>
                <p className="text-gray-500 text-sm">{data.code}</p>
            </div>

            <a href={`tel:${data.code}`} className="text-[#010c80] p-2">
                <IoCall size={20} />
            </a>
        </li>
    );
}

List.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
    }).isRequired,
};

export default List;
