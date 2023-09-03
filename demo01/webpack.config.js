const path = require('path');
// learn 打包文件输出目录和名称
module.exports = {
  mode: 'production',
  entry: './main.js',
  devServer: {
    static: '.',
  },
  output: {
    filename: 'bundle.js',
    // 将当前文件所在的目录路径作为输出路径。__dirname是Node.js中的一个全局变量，表示当前文件所在的目录路径
    path: path.resolve(__dirname)
  }
};
