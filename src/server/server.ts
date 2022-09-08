const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('../../webpack.config.js');
const { ROUTES } = require('./constants');
const { cityRouter } = require('./router');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);
app.use(ROUTES.city, cityRouter);

app.use(express.static(config.devServer.static.directory));

// Serve the files on port 8008.
app.listen(8008, function () {
    console.log('Example app listening on port 8008!\n');
});
