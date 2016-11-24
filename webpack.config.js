const path = require('path')
const webpack = require('webpack')
const pj = path.join
const ROOT_DIR = __dirname
const SRC_DIR = pj(ROOT_DIR, 'client')
const DEST_DIR = pj(ROOT_DIR, 'public', 'build')
const NODE_MODULES_DIR = pj(ROOT_DIR, 'node_modules')

const config = {
  context: SRC_DIR,
  entry: {
    index: [
      'babel-polyfill',
      'index.js'
    ]
  },
  output: {
    path: DEST_DIR,
    publicPath: 'build/',
    filename: '[name].js'
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
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise'
    })
  ]
}

module.exports = config
