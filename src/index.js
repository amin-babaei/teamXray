import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Xray from './xray';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './app/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
        <Xray />
        <ToastContainer theme='dark' position='top-left' autoClose={4000} closeOnClick={true}/>
    </Provider>
  </BrowserRouter>
  
);

