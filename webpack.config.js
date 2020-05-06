const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var mode = process.env.NODE_ENV || 'development';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
        compress: true
    },
    devtool: (mode === 'development') ? 'eval-cheap-module-source-map' : 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                resolve: { extensions: ['.js', '.jsx'] },
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin()
    ]
}