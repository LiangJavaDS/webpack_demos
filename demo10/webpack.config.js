const path = require('path')

module.exports = {
  mode: 'production',
  entry: './main.js',
  devServer: {
    static: '.',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  }
};
