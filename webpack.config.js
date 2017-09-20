const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: {
    app: path.join(__dirname, '/src/index.js')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      // Load JSX
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      // Load CSS and SCSS
      {
        test: /\.scss?|\.css?/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader' }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({
      'process.env': {
        'MONEY_TRACKER_ENV': JSON.stringify(process.env.MONEY_TRACKER_ENV),
        'MONEY_TRACKER_SERVER_HOST': JSON.stringify(process.env.MONEY_TRACKER_SERVER_HOST),
        'MONEY_TRACKER_SERVER_PORT': JSON.stringify(process.env.MONEY_TRACKER_SERVER_PORT)
      }
    })
  ]
}

module.exports = config
