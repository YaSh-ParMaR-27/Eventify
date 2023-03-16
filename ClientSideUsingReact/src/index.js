import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { NextUIProvider } from '@nextui-org/react';

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataLayer } from './dataStore/DataLayer';
import reducer,{initialState} from './dataStore/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <DataLayer  initialState={initialState}  reducer={reducer}>
      <BrowserRouter>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </BrowserRouter>
    </DataLayer>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

