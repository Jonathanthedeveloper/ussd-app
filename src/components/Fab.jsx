/* eslint-disable react/prop-types */
function Fab ({title, children, action}) {
    return (
        <button
            className="text-3xl text-white bg-[#010c80] flex items-center justify-center p-5 rounded-full fixed bottom-5 right-5 shadow-md hover:shadow-lg active:shadow-sm transition z-50"
            title={title}
            onClick={
                ()=>{
                    action();
                }
            }
        >

            {children}
        </button>
    )
}

export default Fab;