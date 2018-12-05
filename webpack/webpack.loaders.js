const extractSASS = require("extract-text-webpack-plugin");
const EXCLUDE_FOLDERS = /node_modules/;

module.exports = [
    {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: EXCLUDE_FOLDERS
    },
    {
        test: /\.scss$/,
        use: extractSASS.extract({
            fallback: ['style-loader'], // translates CSS into CommonJS
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[local]--[hash:base64:5]',
                        sourceMap: true,
                        minimize: true,
                        camelCase: true
                    }
                },
                'sass-loader'
            ] // compiles sass to CSS
        })
      },
      {
        rules: [{
            test: /\.scss$/,
            use: extractSASS.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    {
        test: /\.(jpg|png|svg|ico)$/,
        use: 'file-loader?name=./images/[hash].[ext]'
    },
    // {
    //     // Adds CSS to the DOM by injecting a <style> tag
    //     rules: [{
    //         test: /\.css$/,
    //         use: [
    //             { loader: "style-loader" },
    //             { loader: "css-loader" } // The css-loader interprets @import and url() like import/require() and will resolve them.
    //         ]
    //     }]
    // }
];