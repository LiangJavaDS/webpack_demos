const path = require('path')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // style-loader用于将css代码插入到HTML中的<style>标签中
        // css-loader用于在js中通过require或者import引入css成功
        use: ['style-loader', 'css-loader']
      },
    ]
  }
};
