const path = require('path');

const ENTRY_PATH = path.resolve(__dirname, 'src') + '/js/main.js';
const BUILD_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    mode: 'development',
    entry: ENTRY_PATH,
    devtool: 'source-map',
    watch: true,
    output: {
        path: BUILD_PATH + '/js',
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    devServer: {
        contentBase: BUILD_PATH,
        watchContentBase: true,
        compress: true,
        port: 9000,
        open: true,
        stats: {
            children: false,
            maxModules: 0
        }
    }
};
