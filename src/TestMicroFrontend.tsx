import '@webcomponents/webcomponentsjs';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from './theme';
import GlobalStyle from './GlobalStyles';
import App from './App';

export default class TestMicroFrontend extends HTMLElement {
  private readonly appContainer: HTMLDivElement;

  constructor() {
    super();
    const app = document.getElementsByTagName('test-microfrontend')[0];
    this.appContainer = document.createElement('div');
    this.appContainer.setAttribute('id', 'test-microfrontend');
    app.appendChild(this.appContainer);
  }

  connectedCallback() {
    const helloText = this.getAttribute('hello-text') || '';

    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App helloText={helloText} />
      </ThemeProvider>,
      document.getElementsByTagName('test-microfrontend')[0],
    );
  }
}

if (!window.customElements.get('test-microfrontend')) {
  window.customElements.define('test-microfrontend', TestMicroFrontend);
}
