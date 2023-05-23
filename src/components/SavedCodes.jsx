/* eslint-disable react/prop-types */

import UssdList from "./UssdList.jsx";
import {useEffect, useState} from "react";
import Fab from "./Fab.jsx";
import useNewCode from "../hooks/useNewCode.js";
import NewCodeForm from "./modals/NewCodeForm.jsx";
import Overlay from "./Overlay.jsx";
import {AiOutlinePlus} from "react-icons/ai";


function SavedCodes({activeTab}) {

    const [savedCodes, setSavedCodes] = useState([])

    const {active, toggleActive} = useNewCode();


    useEffect(function () {
        const data = JSON.parse(localStorage.getItem("saved_codes")) || []
        setSavedCodes(data);
    }, []);


    return (
        <section
            className={` w-full absolute ${activeTab === 2 ? "block" : "hidden"} p-5 transition`}>
            <div>
                <UssdList data={savedCodes}/>
            </div>

            <NewCodeForm active={active} action={toggleActive} updateState={setSavedCodes}/>

            <Fab action={toggleActive}>
                <AiOutlinePlus/>
            </Fab>
            <Overlay active={active} action={toggleActive}/>
        </section>
    )
}

export default SavedCodes;