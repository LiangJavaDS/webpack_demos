const path = require('path')

module.exports = {
  mode: 'production',
  // 入口使用对象语法
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  output: {
    // 使用占位符确保每一个文件具有唯一的名称
    filename: '[name].js',
    path: path.resolve(__dirname)
  }
};
