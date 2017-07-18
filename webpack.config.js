var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: {
    app: __dirname + '/src/index.jsx'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.jsx?/,
        exclude:/node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};

module.exports = config;
