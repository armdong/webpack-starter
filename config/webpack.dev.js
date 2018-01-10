const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

const config = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    hot: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;
