import fs from 'fs';
import path from 'path';
import express, { Request, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../App';
import { StaticRouter } from 'react-router-dom';
import { StaticRouterContext } from 'react-router';

const app = express();

const templateFn = (html: string) => {
  return fs.readFileSync(path.join(process.cwd(), 'dist/index.html'), 'utf8')
    .replace(/{HTML}/g, html);
};

app.use(express.static('dist', { index: false }));

app.get('*', (req: Request, res: Response) => {
  const context: StaticRouterContext = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App/>
    </StaticRouter>
  );

  const template = templateFn(html);

  res.send(template);
});

app.listen(3000, () => console.log('Listening to port 3000!'));