/* eslint-disable react/prop-types */

import TextField from "../TextField.jsx";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";


function NewCodeForm({active, action, updateSavedCodes}) {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()


    function onSubmit(data) {

        const previousData = JSON.parse(localStorage.getItem("saved_codes")) ?? new Array();

        previousData.push({id: previousData.length + 1, ...data});

        localStorage.setItem("saved_codes", JSON.stringify(previousData));
        updateSavedCodes(previousData);

        console.log("form data will be reset")

        // clear form fields and close form
        reset();
        action();

        toast.success("USSD Code Saved to local storage successfully")

    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}

            className={`add-new ${active ? "block -translate-y-1/2" : "hidden translate-y-5"} shadow-md bg-white fixed top-1/2 left-1/2 -translate-x-1/2 z-50 rounded-sm p-5 w-[90%] max-w-[320px]`}>
            <div className="grid gap-5">


                <TextField label="Title" placeholder="Data Plans" register={register} errors={errors} id="title"
                           name="title" value=""/>

                <TextField label="USSD Code" placeholder="*000#" register={register} errors={errors} id="code"
                           name="code" value=""/>


                <div className="grid">
                    <button type="submit"
                            className="px-6 py-2 bg-[#010c80] text-white rounded-sm shadow-lg active:shadow-none">Save
                    </button>
                </div>
            </div>

        </form>
    )
}

export default NewCodeForm;