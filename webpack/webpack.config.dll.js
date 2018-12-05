"use strict"

let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: [path.resolve("vendors", "vendors.js")]
    },
    output: {
        path: path.resolve("bin"),
        filename: "dll.js",
        library: "vendors"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join("vendors", "vendors-manifest.json"),
            name: "vendors",
            context: path.resolve("vendors")
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        //new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        //root: path.resolve(__dirname, "vendors"),
        modules: ["node_modules"]
    }
};