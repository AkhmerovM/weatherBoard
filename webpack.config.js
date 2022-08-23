const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.ANALYZE === 'true';

const paths = {
    public: path.resolve(__dirname, 'static'),
    build: path.resolve(__dirname, 'static/build'),
    src: path.resolve(__dirname, 'src')
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: paths.build,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?(js|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader'
                    }
                ]

            },
            {
                test: /\.m?(less)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJs
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    {
                        loader: 'less-loader' // compiles Less to CSS
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.less'],
        alias: {
            '@': paths.src
        }
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'static')
        },
        compress: true,
        port: 8008,
        devMiddleware: {
            writeToDisk: true
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'src/images'), to: path.resolve(__dirname, 'static/images') },
                { from: path.resolve(__dirname, 'src/scripts'), to: path.resolve(__dirname, 'static/build') }
            ]
        }),
        new WriteFilePlugin()
    ]
};
