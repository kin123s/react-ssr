const path              = require('path');
const UglifyJsPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base').config;


const config = merge(baseConfig, {
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [...cssLoaders, 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: false
        })
    ]
});

module.exports = config;
