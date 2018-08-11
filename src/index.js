import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/HelloWorld';

import './assets/styles/style.sass';
import './assets/styles/style.css';

ReactDOM.render(
  React.createElement(Hello),
  document.getElementById('root'),
);

// Check if hot reloading is enable. If it is, changes won't reload the page.
// This is related to webpack-dev-server and works on development only.
if (module.hot) {
  module.hot.accept();
}
