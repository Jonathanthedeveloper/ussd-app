/* eslint-disable react/prop-types */
function TextField ({label, placeholder, register, errors, id, name}) {
    return (

        <div className="grid gap-1">
            <label htmlFor={id} className="text-sm text-gray-600 font-semibold">{label}</label>
            <input id={id} name={name} {...register(name, {required: true})} type="text" className={`border ${!errors[id] ? "border-[#010c80] focus:outline-[#010c80]/5" : "border-red-500/5 focus:outline-red-500"} w-full rounded-sm text-lg py-2 px-3 focus:outline  transition outline-2`} placeholder={placeholder}/>
        </div>
    )
}

export default TextField;