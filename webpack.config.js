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
            { loader: 'css-loader' },
            { loader: 'sass-loader' }
          ],
          fallback: 'style-loader'
        })
      },
      // Load Fonts with url-loader
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=assets/[name].[ext]'
      },
      // Load Fonts/Images with file-loader
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=assets/[name].[ext]'
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
