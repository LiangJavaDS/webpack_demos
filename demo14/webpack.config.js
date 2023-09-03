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
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
    ]
  },
  externals: {
    // require('data') is external and available
    //  on the global var data
    'data': 'data'
  }
};
