import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Com from "./Com"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{margin:"20px"}}>Hello</div>
    <Com data="Hello, This the Data which is passed throught the component" /> 
  </React.StrictMode>
);
