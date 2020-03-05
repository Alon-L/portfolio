const express = require('express');
const webpack = require('webpack');
const path = require('path');
const requireFromString = require('require-from-string');
const MemoryFS = require('memory-fs');
const serverConfig = require('./webpack.production.config');
const fs = new MemoryFS();

const port = 3009 || process.env.PORT;

const outputErrors = (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    return;
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.error(info.errors);
  }
  if (stats.hasWarnings()) {
    console.warn(info.warnings);
  }
};

console.log('Initializing server application...');
const app = express();

console.log('Compiling bundle...');
const serverCompiler = webpack(serverConfig);
serverCompiler.outputFileSystem = fs;

serverCompiler.run((err, stats) => {
  outputErrors(err, stats);

  const contents = fs.readFileSync(path.resolve(serverConfig.output.path, serverConfig.output.filename), 'utf8');
  const webContent = requireFromString(contents, serverConfig.output.filename);

  app.use(express.static('dist', { index: false }));

  app.get('*', webContent.default);

  app.listen(port);

  console.log(`Server listening on port ${port}!`);
});