const path              = require('path');
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base').config;


const config = merge(baseConfig, {
    mode: 'production',
    devtool: 'cheap-module-eval-source-map'
});

module.exports = config;
