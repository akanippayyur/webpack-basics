var devConfig = require('./webpack.config.js');
var webpackStripLoader = require('strip-loader');

var stripLoader = {
  test: [/\.js$/],
  exclude: /node_modules/,
  loader: webpackStripLoader.loader('console.log')
};

devConfig.module.loaders.push(stripLoader);
module.exports = devConfig;
