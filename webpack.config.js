var webpack = require('webpack');

var postCSSConfig = require('./postcss.config');

var config = {
  entry: {
    app: __dirname + '/src/index.jsx'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css?modules&importLoaders=1&locaIdentName=[hash:base64:5]&camelCase!postcss'
      }
    ]
  },
  postcss: function() {
    return postCSSConfig;
  }
};

module.exports = config;
