/* eslint-disable react/prop-types */
function Overlay({active, action}) {

    return (
        <div onClick={() => {
            action();
        }
        } id="overlay"
             className={`fixed w-full h-[100dvh] opacity-1 ${active ? "" : "hidden z-30"} top-0 left-0 `}></div>
    )
}

export default Overlay;