import React from 'react';
import ReactDOM from 'react-dom';

import { GlobalStyle } from './style'

import Routers from './routes'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routers />
  </React.StrictMode>,
  document.getElementById('root')
);


