const path = require('path');
const nodeExternals = require('webpack-node-externals');
require('dotenv').config();

module.exports = {
  mode: 'production',
  entry: './src/server/server.tsx',
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
        loader: 'url-loader?emitFile=false'
      },
      {
        test: /\.svg$/,
        use: {
          loader: '@svgr/webpack',
          options: {
            ref: true
          }
        },
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.join(__dirname, 'dist'),
    library: 'app',
    libraryTarget: 'commonjs2'
  }
};
