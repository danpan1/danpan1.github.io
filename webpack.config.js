'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');

console.log(NODE_ENV)
console.log(NODE_ENV)
console.log(NODE_ENV)

module.exports = {

  context: __dirname + "/frontend",
  entry: {
    common: "./common",
    home: "./home",
    about: "./about"
  },

  output: {
    path: __dirname + "/public",
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
    new webpack.optimize.CommonsChunkPlugin({ name: 'common' })
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

        query: {
          plugins: ['transform-runtime'],
          presets: ['es2015'],
        }

      },
      { test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]' }
    ]

  }
}

if (NODE_ENV == "production") {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  )
}

