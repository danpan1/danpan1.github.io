'use strict'

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
console.log(NODE_ENV)
module.exports = {
  // context: __dirname + "/app",
  entry: "./webpackEntry.js",
  output: {
    // path: __dirname + "/dist",
    filename: "build.js"
  },
  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: NODE_ENV == 'development' ? 'cheap-inline-source-map' : null,
  'plugins': [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV),
      LANG: JSON.stringify('ru')
    })
  ],
  module: {
  	
  }
}
