/* eslint-disable react/prop-types */

/**
 * Returns a floating action button
 * @param {string} title
 * @param {JSX.Element | string} children
 * @param {function} action
 * @param {boolean} standby
 * @returns {JSX.Element}
 * @constructor
 */
function Fab({title, children, action, standby}) {
    return (
        <button
            className="text-3xl text-white bg-[#010c80] flex items-center justify-center p-5 rounded-full fixed bottom-5 right-5 shadow-md hover:shadow-lg active:shadow-sm transition z-50"
            title={title}
            onClick={
                () => {
                    if(standby) return
                    action();
                }
            }
        >

            {children}
        </button>
    )
}

export default Fab;