import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './App'; // Import the Board component from App.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
);