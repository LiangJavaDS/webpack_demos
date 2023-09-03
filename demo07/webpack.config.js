var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  devServer: {
    static: '.',
  },
  plugins: [
    new UglifyJsPlugin()
  ]
};
