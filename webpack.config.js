/* webpack import */
var _system = require('./system/system');
var webpack = require('webpack');
var path = require('path');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

/* Export modules de info */
module.exports = {
  entry: "./app/conf/app.js",
  output: {
    path: path.join(__dirname, 'app/src/js'),
    filename: "bundle.js",
    publicPath: "/"
  },

  plugins: global.enviroment == 'prod'
    ? [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production")
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ]
    : [],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      }
    ]
  }
};