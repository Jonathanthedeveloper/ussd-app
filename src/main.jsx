import ReactDOM from 'react-dom/client'
import React from "react";
import './index.css'
import App from './App'
import ToastProvider from "./Providers/ToastProvider.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToastProvider/>
        <App/>
    </React.StrictMode>,
)
