/* eslint-disable react/prop-types */

import {BiArrowBack} from "react-icons/bi";
import {useNavigate, useParams} from "react-router-dom";


function Header({title, activeTab, setActiveTab}) {
    const navigate = useNavigate();
    const {network} = useParams();


    return (
        <header className="bg-[#010c80] text-white w-full shadow-md sticky top-0 transition">
            <div>
                <div className="text-center py-3 px-2 mb-5">
                    <div className="uppercase font-bold justify-self-center transition">
                        {title ? title : "ussd"}
                    </div>
                </div>
                <div className="text-center mb-5">
                    <p>
                        The USSD Code PWA is a Progressive Web App that simplifies access to USSD codes by providing a
                        user-friendly catalog of available codes.
                    </p>
                </div>
            </div>

            <nav>
                <ul className={`relative after:absolute after:w-1/2 after:h-1 after:bg-white after:absolute after:bottom-0 after:transition after:translate-x-[${(activeTab - 1) * 100}%] transition`}>
                    <span className="hidden  after:translate-x-[100%]"></span>
                    <span className=" hidden after:translate-x-[0%]"></span>
                    <li className="grid grid-cols-2 transition">
                        {!network && (
                            <button onClick={() => {
                                setActiveTab(1)
                            }
                            } className="pb-4 pt-2  "
                            >
                                Main
                            </button>)
                        }

                        {network && (

                            <button
                                onClick={() => {
                                    if (activeTab === 2) {
                                        setActiveTab(1)
                                    } else {
                                        navigate(-1);
                                    }
                                }}
                                className="flex items-center justify-center gap-2"
                            >
                                {activeTab === 2 ? title.toUpperCase() : (
                                    <>
                                        <BiArrowBack size={20}/>
                                        Back
                                    </>
                                )}
                            </button>
                        )
                        }
                        <button onClick={() => {
                            setActiveTab(2)
                        }
                        } className="pb-4 pt-2  relative ">Saved Codes
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default Header;
