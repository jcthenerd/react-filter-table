const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'styles.bundle.css'
});

const config = {
    entry: ['./src/app.js', './src/styles/styles.scss'],
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react']
                }
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react']
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract(['css-loader', 'sass-loader'])
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: 'eval-source-map',
    plugins: [
        new HtmlWebpackPlugin({ template: './src/app.html' }),
        extractSass
    ]
};

module.exports = config;