// import {useRouter} from "react-router"
import {useNavigate} from "react-router";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function MenuButton({label, children, to}) {

    const navigate = useNavigate()

    return (
        <button
            onClick={
                () => {
                    navigate(`/${to}`)
                }
            }
            className={` w-full rounded-lg py-4 bg-[#010c80] font-bold text-white`}
        >
            {children}
            <span>{label}</span>
        </button>
    )
}


MenuButton.PropTypes = {
        label: PropTypes.string,
        children: PropTypes.node,
        to: PropTypes.string
}

export default MenuButton;