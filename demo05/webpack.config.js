const path = require('path')

module.exports = {
  mode: 'production',
  mode: 'production',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  devServer: {
    static: '.',
  },
  devServer: {
    static: '.',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,

        // type是 webpack 5 中的新特性 asset/resource，将所有匹配到的 PNG 和 JPG 图片文件打包成单独的文件，并输出到输出目录中。
        // type: 'asset/resource',

        // 将图片文件转成Base64编码的URL字符串，并在打包后的js文件中引入
        use: [
          {
            // 使用此loader的限制是js文件使用import语法而不是require
            loader: 'url-loader',
            options: {
              // limit的单位为byte，注意若图片大于limit则打包成文件，小于则转换为base64字符串
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
