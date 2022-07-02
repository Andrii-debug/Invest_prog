import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import json from './components/current-loans.json'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={json}/>
  </React.StrictMode>
);



