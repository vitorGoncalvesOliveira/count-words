import React from 'react';
import ReactDOM from 'react-dom';

import { UserContextProvider } from './context/user'
import { GlobalStyle } from './style'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Routers from './routes'

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider >
      <GlobalStyle />
      <Routers />
      <ToastContainer />
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


