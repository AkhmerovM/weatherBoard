const path = require('path');

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
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    }
};