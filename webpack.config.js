const path = require('path')
const ROOT_DIR = __dirname
const SRC_DIR = path.join(ROOT_DIR, 'client')
const DEST_DIR = path.join(ROOT_DIR, 'public', 'build')
const NODE_MODULES_DIR = path.join(ROOT_DIR, 'node_modules')

module.exports = {
  context: SRC_DIR,
  entry: {
    index: [
      'babel-polyfill',
      'index.js'
    ]
  },
  output: {
    path: `${__dirname}`,
    publicPath: 'build/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/, /public/],
        query: {
          presets: ['react']
        }
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?limit=10000&mimetype=image/gif'
      },
      {
        test: /\.jpg$/,
        loader: 'url-loader?limit=10000&mimetype=image/jpg'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=10000&mimetype=image/png'
      },
      {
        test: /\.svg/,
        loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
      },
      {
        test: /\.jsx$/,
        loader: 'react-hot!babel',
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve: {
    root: SRC_DIR,
    extensions: ['', '.js'],
    modulesDirectories: [NODE_MODULES_DIR]
  }
}
