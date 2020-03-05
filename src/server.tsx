import fs from 'fs';
import { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import store from './store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

const templateFn = (html: string) => {
  return fs.readFileSync('./dist/index.html', 'utf8')
    .replace(/{HTML}/g, html);
};

export default (req: Request, res: Response) => {
  const history = createMemoryHistory();

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  const template = templateFn(html);

  res.send(template);
};