import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';

ReactDOM.render(
 <>
 <h1 className='heading'>Top 6 Netflix Webseries</h1>
 <div className ='container'>
    {App}
  </div>
 </>,
  document.getElementById("root")
);