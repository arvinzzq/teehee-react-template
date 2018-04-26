import React, { Component, PureComponent } from 'react';
import ReactDOM from 'react-dom';
import App from '../../src/App';
import '../../src/main.css';
import './index.css';

class Hello extends (PureComponent || Component) {
  render() {
    <App />
  };
}

ReactDOM.render(<Hello />, document.getElementById('app'));
