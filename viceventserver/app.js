var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// https://expressjs.com/en/guide/routing.html

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

// Begin server code - above will be removed and serves only as an example
var resourceRouter = require('./routes/resource')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', resourceRouter);
//app.use('/users', usersRouter);

module.exports = app;