var path = require('path');
var webpack = require('webpack');
module.exports = {
  context: path.resolve('js'),
  entry: ["./app.js", "./login.js"],
  output: {
    path: path.resolve('build/js/'),
    publicPath: '/public/assets/js/',
    filename: "bundle.js"
  },

//  plugins: [new webpack.optimize.CommonsChunkPlugin()],

  devServer: {
    contentBase: 'public'
  },

  watch: true,

  module: {
    preloaders: [
      {
        test: /\.js$/,
        exclude: 'node_modules',
        loader: 'jshint-loader'
      }
    ],

    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  resolve: {
    extensions: ['', '.js']
  }
}
