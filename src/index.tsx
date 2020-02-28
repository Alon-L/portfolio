import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// TODO: Add some loading screen between / and /project

ReactDOM.render(
  <Provider store={store}>
    <Router basename={'/abc'}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
);
