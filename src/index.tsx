import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('app')
);
