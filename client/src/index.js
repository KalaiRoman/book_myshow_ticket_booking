import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

//bootstrap css link
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

// redux store provider

import { Provider } from 'react-redux';

// redux store 
import { store } from './redux/Store/Stores';

// Toaster

import { Toaster } from 'react-hot-toast';

import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './contextApi/ContextApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppProvider>
     <Toaster 
       position="top-center"
       reverseOrder={false}
     />  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AppProvider>
  </Provider>
);

reportWebVitals();
