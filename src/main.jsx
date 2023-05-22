import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "./routes/App.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./routes/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>
    },
    {
        path: "/:network",
        element: <App/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
