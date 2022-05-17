import { createGlobalStyle } from 'styled-components';
import CovidImg from 'assets/images/covid.jpg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
  }
  
  body {
    line-height: normal;
  }
  
  html, body {
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root {
    background: url(${CovidImg});
    height:100%; 
    width: 100%;
    background-size: cover;
    background-position: center center;
  }

  .mb-2 {
    margin-bottom: 16px;
  }

  .pt-2 {
    padding-top: 16px;
  }

  .cursor {
    cursor: pointer;
  }
`;

export default GlobalStyle;