/* eslint-disable react/prop-types */

import TextField from "../TextField.jsx";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {useEffect} from "react";


function EditCodeForm({active, action, updateSavedCodes, defaultFormValue}) {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()


    useEffect(() => {
        reset(defaultFormValue)
    }, [defaultFormValue]);


    function onSubmit(data) {


        const previousData = JSON.parse(localStorage.getItem("saved_codes")) ?? [];

        previousData[data.id - 1] = data;

        localStorage.setItem("saved_codes", JSON.stringify(previousData));

        // update state, clear form and close the form
        updateSavedCodes(previousData);
        reset();

        action();

        toast.success("USSD Code updated successfully")

    }

    function cancel() {
        reset();
        action();
    }

    return (
        <form
            id="edit"
            onSubmit={handleSubmit(onSubmit)}
            className={`add-new ${active ? "block -translate-y-1/2" : "hidden translate-y-5"} shadow-md bg-white fixed top-1/2 left-1/2 -translate-x-1/2 z-50 rounded-sm p-5 w-[90%] max-w-[320px]`}>
            <div className="grid gap-5">


                <TextField label="Title" placeholder="Data Plans" register={register} errors={errors} id="title"
                           name="title"/>

                <TextField label="USSD Code" placeholder="*000#" register={register} errors={errors} id="code"
                           name="code"/>


                <input type="hidden" name="id" {...register("id")}/>

                <div className="grid grid-cols-2 gap-5">
                    <button onClick={cancel}
                            className="px-6 py-2 bg-red-500 hover:bg-red-600 transition text-white rounded-sm shadow-lg active:shadow-none">Cancel
                    </button>
                    <button type="submit"
                            className="px-6 py-2 bg-green-500
                            hover:bg-green-600 transition text-white rounded-sm shadow-lg active:shadow-none">Save
                    </button>
                </div>
            </div>

        </form>
    )
}

export default EditCodeForm;