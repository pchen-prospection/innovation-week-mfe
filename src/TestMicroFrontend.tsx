// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import reactToWebComponent from 'react-to-webcomponent';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import theme from './theme';
import GlobalStyle from './GlobalStyles';
import App from './App';

const TestMicroFrontend = ({ text }: {text: string}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App helloText={text} />
  </ThemeProvider>
);

TestMicroFrontend.propTypes = {
  text: PropTypes.string.isRequired,
};

const WebTestMicroFrontend = reactToWebComponent(TestMicroFrontend, React, ReactDOM);

if (!window.customElements.get('test-microfrontend')) {
  window.customElements.define('test-microfrontend', WebTestMicroFrontend);
}
