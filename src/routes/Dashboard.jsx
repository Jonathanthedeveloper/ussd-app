import Header from "../components/Header.jsx";
import MenuButton from "../components/MenuButton.jsx";

function Dashboard() {
    return (
        <>
            <Header/>
            <div className="grid gap-5 p-5 text-gray-700">
                <div className="grid gap-5">
                    <MenuButton label="MTN Codes" to="mtn"/>
                    <MenuButton label="Airtel Codes" to="airtel"/>
                    <MenuButton label="9Mobile" to="9mobile"/>
                    <MenuButton label="Glo" to="glo"/>
                </div>
            </div>
        </>
    )
}

export default Dashboard;