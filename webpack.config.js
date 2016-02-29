'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


console.log(NODE_ENV)
console.log(NODE_ENV)
console.log(NODE_ENV)

module.exports = {

  context: path.resolve(__dirname, "app"),
  entry: { app: "./" },

  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
    library: "[name]"
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-source-map' : null,

  'plugins': [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('ru')
    }),
    // new webpack.optimize.CommonsChunkPlugin({ name: 'common' }),
    new ngAnnotatePlugin(),
    // new webpack.ProvidePlugin({
    //   'angular': 'angular'
    // })

  ],

  resolve: {
    moduleDirectories: ['node_modules'],
    extensions: ['', '.js']
      // resolveRoot : /app
  },

  resolveLoader: {
    moduleDirectories: ['node_modules'],
    moduleTemplates: ['*-loader', '*'],
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel',

        // include: __dirname + "/app",

        query: {
          // plugins: ['transform-runtime'],
          presets: ['es2015'],
        }

      },
      { test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]' }
    ],

    noParse: /angular\/angular.js/

  },
}

if (NODE_ENV == "production") {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      },
      // mangle: false,
      // sourceMap: true
    })
  )
}
