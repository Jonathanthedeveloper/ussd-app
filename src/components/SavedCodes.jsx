/* eslint-disable react/prop-types */

import UssdList from "./UssdList.jsx";
import {useEffect, useState} from "react";
import Fab from "./Fab.jsx";
import useFormModal from "../hooks/useFormModal.js";
import NewCodeForm from "./modals/NewCodeForm.jsx";
import Overlay from "./Overlay.jsx";
import {AiOutlinePlus} from "react-icons/ai";
import EditCodeForm from "./modals/EditCodeForm.jsx";


function SavedCodes({activeTab}) {

    const [savedCodes, setSavedCodes] = useState([])

    const {
        newFormActive, toggleNewFormActive, editFormActive, toggleEditFormActive, defaultFormValue,
    } = useFormModal();

    useEffect(function () {
        const data = JSON.parse(localStorage.getItem("saved_codes")) || []
        setSavedCodes(data);
    }, []);


    return (<section
        className={` w-full absolute ${activeTab === 2 ? "block" : "hidden"} p-5 transition`}>
        <div>
            <UssdList data={savedCodes} label="user" action={toggleEditFormActive}/>

        </div>

        <NewCodeForm
            active={newFormActive}
            action={toggleNewFormActive}
            updateSavedCodes={setSavedCodes}
        />

        <EditCodeForm
            active={editFormActive}
            action={toggleEditFormActive} updateSavedCodes={setSavedCodes} defaultFormValue={defaultFormValue}
        />

        <Fab action={toggleNewFormActive}
             standby={editFormActive}
        >
            <AiOutlinePlus/>
        </Fab>

        <Overlay active={newFormActive || editFormActive}
                 action={newFormActive ? toggleNewFormActive : toggleEditFormActive}/>
    </section>)
}

export default SavedCodes;