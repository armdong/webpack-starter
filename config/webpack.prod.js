const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

const config = merge(common, {
  plugins: [new UglifyJSPlugin()]
});

module.exports = config;
