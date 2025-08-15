import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assumes App.jsx is in the same folder
import './index.css'; // Optional: if you have global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
