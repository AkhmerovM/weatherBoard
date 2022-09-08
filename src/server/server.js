var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var app = express();
var config = require('../../webpack.config.js');
var ROUTES = require('./constants').ROUTES;
var cityRouter = require('./router').cityRouter;
var compiler = webpack(config);
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));
app.use(ROUTES.city, cityRouter);
app.use(express.static(config.devServer.static.directory));
// Serve the files on port 8008.
app.listen(8008, function () {
    console.log('Example app listening on port 8008!\n');
});
