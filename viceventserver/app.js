var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression')

// routes
var resourceRouter = require('./routes/resource')

var app = express();

// Apply compression to responses
app.use(compression())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', resourceRouter);

module.exports = app;
