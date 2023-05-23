/* eslint-disable react/prop-types */

import {useNavigate} from "react-router";


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


export default MenuButton;