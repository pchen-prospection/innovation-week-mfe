import ReactDOM from 'react-dom';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyle from './GlobalStyles';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App helloText="Hello from react app" />
  </ThemeProvider>,
  document.getElementById('app'),
);

// @ts-ignore
if (module.hot && module.hot.accept) module.hot.accept();
