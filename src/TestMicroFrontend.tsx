import '@webcomponents/webcomponentsjs';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from './theme';
import GlobalStyle from './GlobalStyles';
import App from './App';

const createElement = ({ helloText }: {helloText: string}) => React.createElement(
  () => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App helloText={helloText} />
    </ThemeProvider>
  ),
);

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
      createElement({ helloText }),
      document.getElementsByTagName('test-microfrontend')[0],
    );
  }

  static get observedAttributes() {
    return ['hello-text'];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'hello-text') {
      ReactDOM.render(createElement({ helloText: newValue }), document.getElementsByTagName('test-microfrontend')[0]);
    }
  }
}

if (!window.customElements.get('test-microfrontend')) {
  window.customElements.define('test-microfrontend', TestMicroFrontend);
}
