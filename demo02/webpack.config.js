const path = require('path')
// learn 多文件多入口，使用占位符保证打包后的文件名称唯一
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
