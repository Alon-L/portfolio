import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './sass/index.scss';
import { BrowserRouter as Router } from 'react-router-dom';

// TODO: Add some loading screen between / and /project

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('app')
);
