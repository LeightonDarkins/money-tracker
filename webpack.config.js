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
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env':{
        'MONEY_TRACKER_ENV': JSON.stringify(process.env.MONEY_TRACKER_ENV),
        'MONEY_TRACKER_SERVER_HOST': JSON.stringify(process.env.MONEY_TRACKER_SERVER_HOST),
        'MONEY_TRACKER_SERVER_PORT': JSON.stringify(process.env.MONEY_TRACKER_SERVER_PORT)
      }
    })
  ]
};

module.exports = config;
