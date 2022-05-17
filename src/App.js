import React from 'react';
import GlobalStyle from 'commons/styles/global-styles';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import Main from 'pages/Main';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
