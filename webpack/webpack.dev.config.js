"use strict"

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let WebpackCleanupPlugin = require('webpack-cleanup-plugin');
let loaders = require('./webpack.loaders');

const PORT = 8282;

module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:' + PORT + '/',
            './src/app.js'
        ],
        vendor: ["react", "react-dom"]
    },
    output: {
        publicPath: '/',
        path: path.resolve('build'),
        filename: 'bundle.dev.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.webpack.js', '.web.js', '.css', '.scss'],
        modules: ['node_modules']
    },
    module: {
        rules: loaders
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.dev.html',
            files: {
                css: ['style.css'],
                js: ['bundle.js'],
            }
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     compress: {
        //         warnings: false,
        //         screw_ie8: true,
        //         drop_console: true,
        //         drop_debugger: true
        //     }
        // }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.bundle.js",
            minChunks: Infinity
        }),
        new WebpackCleanupPlugin(),
    ],/*
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },*/
    devtool: 'source-map',
    devServer: {
        contentBase: './',
        hot: true,
        inline: true,
        noInfo: true,
        historyApiFallback: true,
        port: PORT,
        // proxy: {
        //     '/cxwebclient/api': {
        //         target: TARGET_PORTAL_URL
        //     },
        //     '/cxrestapi': {
        //         target: TARGET_REST_API_URL
        //     }
        // }
    }
};