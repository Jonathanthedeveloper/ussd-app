import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import ToastProvider from './Providers/ToastProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider />
    <App />
  </React.StrictMode>,
);
