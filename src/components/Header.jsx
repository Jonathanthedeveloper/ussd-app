import { BiArrowBack } from "react-icons/all.js";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ icon, title }) {
    const navigate = useNavigate();

    return (
        <header className="bg-[#010c80] text-white py-3 px-2 w-full shadow-md sticky top-0 grid">
            {icon && (
                <button
                    onClick={() => {
                        navigate(-1);
                    }}
                    className="p-2 justify-self-start"
                >
                    <BiArrowBack />
                </button>
            )}
            <div className="uppercase font-bold justify-self-center">
                {title ? title : "ussd"}
            </div>
        </header>
    );
}

Header.propTypes = {
    icon: PropTypes.bool,
    title: PropTypes.string,
};

export default Header;
