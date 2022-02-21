import {  createGlobalStyle } from 'styled-components';
import backgroundImg from './assets/images/unsplash_m_7p45JfXQo.png'
export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        border: 0;                
        box-sizing: border-box;    
    }

    html {
        height: 100vh;
    }

    body {
        background: url(${backgroundImg}) repeat;
        background-size: 100%;
        height: 100%;
    } 

    button {
        cursor: pointer;
    }
    
`