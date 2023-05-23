/* eslint-disable react/prop-types */

import Header from "../components/Header.jsx";
import SavedCodes from "../components/SavedCodes.jsx";
import Menu from "../components/Menu.jsx";

function Dashboard({setActiveTab, activeTab}) {


    return (
        <>
            <Header setActiveTab={setActiveTab} activeTab={activeTab}/>
            <div className="relative transition">
                <Menu activeTab={activeTab}/>
                <SavedCodes activeTab={activeTab}/>
            </div>
        </>
    )
}

export default Dashboard;