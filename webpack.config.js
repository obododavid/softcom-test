const path = require('path');
const mode = process.env.NODE_ENV || 'development';

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
    devtool: (mode === 'development') ? 'eval-cheap-module-source-map' : 'source-map'
}