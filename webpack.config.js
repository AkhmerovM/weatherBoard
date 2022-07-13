const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';
const isAnalyze = process.env.ANALYZE === 'true';

const paths = {
    public: path.resolve(__dirname, 'www'),
    build: path.resolve(__dirname, 'www/build'),
    src: path.resolve(__dirname, 'src'),
};

module.exports = {
    entry: './src/index.js',
    output: {
        path: paths.build,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?(js|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
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
                            modules: true,
                        },
                    },
                    {
                        loader: "less-loader",  // compiles Less to CSS
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', ".js", ".less"],
    },
    devServer: {
        static: {
            directory: paths.build,
        },
        compress: true,
        port: 8008,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
};
