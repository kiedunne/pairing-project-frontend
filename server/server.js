import express, { static } from 'express';
import { resolve } from 'path';
import config, { output } from '../webpack.config.js';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
var app = express();
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(static('./dist'));
app.use('/', function (req, res) {
  res.sendFile(resolve('client/index.html'));
});

var port = 8000;
app.listen(port, function (error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});