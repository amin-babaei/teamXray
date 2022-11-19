import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import Xray from './xray';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './app/store';
import ErrorBoundary from './components/ErrorBoundary';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <Provider store={store}>
        <HelmetProvider>
          <Xray />
          <ToastContainer theme='dark' position='top-left' autoClose={4000} closeOnClick={true}/>
        </HelmetProvider>
      </Provider>
    </ErrorBoundary>
  </BrowserRouter>
  
);

