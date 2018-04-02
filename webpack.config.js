const path = require('path');
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: [
        'react-hot-loader/patch',
        path.resolve("src/index.js")
    ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
      },
    module: {
        rules: [
            { test: /\.html$/i, loader: 'html-loader' },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                  })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
      },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("dist/styles/styles.css"),
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve("src/index.html")
        })
      ],
    devServer: {
      contentBase: 'dist',
      hot: true
    }
  };