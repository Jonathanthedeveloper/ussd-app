import {useState} from "react";
import Code from "./routes/Code.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";


function App() {

    const [activeTab, setActiveTab] = useState(1)

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Dashboard activeTab={activeTab} setActiveTab={setActiveTab}/>
        },
        {
            path: "/:network",
            element: <Code activeTab={activeTab} setActiveTab={setActiveTab}/>
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App;