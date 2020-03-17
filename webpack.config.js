const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|woff|woff2|ttf|png|jpg|gif)$/,
        loader: 'url-loader'
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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
      title: 'Alon Livne',
      meta: {
        title: 'Alon Livne',
        description: 'Alon Livne - Fullstack Developer',
        keywords: 'fullstack,developer,alon livne,alon,livne,frontend,backend,software engineer,discord bots,bots,alonlivne.dev',
        robots: 'index, follow',
        language: 'English'
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'FULL_JS_LICENSE_KEY': JSON.stringify(process.env.FULL_JS_LICENSE_KEY),
        'EMAIL_JS_SERVICE_ID': JSON.stringify(process.env.EMAIL_JS_SERVICE_ID),
        'EMAIL_JS_TEMPLATE_ID': JSON.stringify(process.env.EMAIL_JS_TEMPLATE_ID),
        'EMAIL_JS_USER_ID': JSON.stringify(process.env.EMAIL_JS_USER_ID),
      },
    }),
    new CopyWebpackPlugin([{
      from: 'src/assets', to: 'assets'
    }]),
  ],
  devServer: {
    contentBase: [
      './public/index.html',
      path.join(__dirname, 'src/assets')
    ],
    historyApiFallback: true,
  },
};
