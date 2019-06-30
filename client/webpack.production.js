const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index_bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.json$/,
        include: /node_modules/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[local]_[hash:base64]",
              sourceMap: true
            },
          },
          "sass-loader"
        ]
      },
      {
        test: /\.svg$/,
        use: "url-loader",
      },
      {
        test: /plugin\.scss$/,
        loaders: [
          'style-loader', 'scss'
        ]
      }
    ]
  },
  resolve:
  {
    alias:
    {
      assets: path.resolve(__dirname, 'src', 'assets')
    }
  }
};