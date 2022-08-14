import React from 'react';
import ReactDOM from 'react-dom/client';
import { CountProvider } from './context/CountContext';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountProvider>
    <App />
  </CountProvider>
);
