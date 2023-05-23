/* eslint-disable react/prop-types */

import MenuButton from "./MenuButton.jsx";

function Menu({activeTab}) {
    return (
        <section className={`absolute w-full ${activeTab === 1? "block": "hidden"} p-5 transition`}>
            <div className="grid gap-5  text-gray-700">
                <div className="grid gap-5">
                    <MenuButton label="MTN Codes" to="mtn"/>
                    <MenuButton label="Airtel Codes" to="airtel"/>
                    <MenuButton label="9Mobile" to="9mobile"/>
                    <MenuButton label="Glo" to="glo"/>
                </div>
            </div>
        </section>
    )
}

export default Menu;