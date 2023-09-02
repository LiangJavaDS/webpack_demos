var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
