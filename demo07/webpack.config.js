var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

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
  // 压缩代码webpack插件
  // plugins: [
  //   new UglifyJsPlugin()
  // ]

  // webpack5自带的压缩插件
  // 优化选项
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        // 配置选项
      })
    ]
  }
};
