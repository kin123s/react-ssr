const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();

const dev = process.env.NODE_ENV === 'dev';

// externals: [nodeExternals()],

let config = {
    entry: ['./src/server.ts'],
    target: "node",
    externals: [nodeExternals()],
    devtool: 'inline-source-map',
    module: {
        rules: [ // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    getCustomTransformers: () => ({
                        before: [styledComponentsTransformer]
                    })
                }
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js', '.jsx'
        ],
        alias: {
            "@src": path.resolve(__dirname, 'src'),
            "@views": path.resolve(__dirname, '../client/src')
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'views',
            to: 'src/views'
        }]),
        new webpack
        .optimize
        .OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}

module.exports = {
    config
}
