import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ComA from './ComA';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      
   <ComA/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//for API fetching in CompA by Async and useEffect we wrote <ComA/> between <></> here it works,
//we remove to work regarding router