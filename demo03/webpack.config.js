const path = require('path')

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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // 旧版的Babel预设
            // presets: ['es2015', 'react']
            // 新版的Babel预设

            // @babel/preset-env 可以根据目标环境自动确定需要的插件和 polyfill
            // @babel/preset-react 则用于将 JSX 转换为 JavaScript。

            // polyfill的意思：Polyfill 是一种技术，它可以在旧版浏览器或其他不支持某些新特性的环境中，模拟实现这些新特性。
            // polyfill 会检测当前环境是否已经支持某个新特性，如果支持则不做处理，否则就加载相应的 polyfill 代码。
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};
