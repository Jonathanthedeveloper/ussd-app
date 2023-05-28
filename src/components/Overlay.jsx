/* eslint-disable react/prop-types */


/**
 *This displays a dark transparent overlay based of it's param active
 * @param {boolean} active
 * @param {function} action
 * @returns {JSX.Element}
 * @constructor
 */
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