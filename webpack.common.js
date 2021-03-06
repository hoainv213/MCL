const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');

const VENDOR_LIBS = [
    'axios',
    'jquery',
    'popper.js',
    'react',
    'react-animate-on-scroll',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'webpack-jquery-ui',
    'animate.css',
    'bootstrap/dist/css/bootstrap.min.css',
    'redux-thunk',
];

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: VENDOR_LIBS,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx$|\.js$/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$|\.css$/,
                use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader','postcss-loader']
                })
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',
                        publicPath: 'dist'
                    }
                }]
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'url-loader?limit=10000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html',
            favicon: './assets/images/icons8.png',
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            Popper: ['popper.js', 'default'],
        }),
    ],
    optimization: {
        runtimeChunk: "single", // enable "runtime" chunk
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    devServer: {
        disableHostCheck: true
    }
};