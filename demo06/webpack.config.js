const path = require('path')
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// learn 启用css本地模块，会将class随机编译
module.exports = {
  mode: 'production',
  entry: './main.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  devServer: {
    static: '.',
  },
  plugins: [
    new UglifyJsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
};
