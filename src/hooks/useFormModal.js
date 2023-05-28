import {useState} from "react";

function useFormModal() {
    const [newFormActive, setNewFormActive] = useState(false);
    const [editFormActive, setEditFormActive] = useState(false);
    const [defaultFormValue, setDefaultFormValue] = useState({id: "", title: "", code: ""});

    function toggleNewFormActive() {
        setNewFormActive((prev) => !prev);
    }

    function toggleEditFormActive(formData = {}) {
        setDefaultFormValue(formData);
        setEditFormActive((prev) => !prev);
    }

    return {
        newFormActive,
        toggleNewFormActive,
        editFormActive,
        toggleEditFormActive,
        defaultFormValue,
    };
}

export default useFormModal;
