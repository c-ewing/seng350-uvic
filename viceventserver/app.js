var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var db = require('./resource_db.js');

// Routes
var resourceRouter = require('./routes/resource')
//var searchRouter = require('./routes/search')

// Initialize the Database:
db.check_db_structure()

// Try to insert some dummy data into SportsTeams:
db.insert_data(db.TABLES[5], ...["3f259a09-e036-4eb7-8c83-010287c09095", "VIKES Rowing", "2022-10-31T09:00:00Z", "2022-11-31T09:00:00Z", "UVic Varsity Rowing Team", "long blurb about the rowing team", ""])
db.insert_data(db.TABLES[5], ...["87965113-4fbf-4920-91b5-f1046417e545", "UVic Intramural Volleyball", "2022-9-31T09:00:00Z", "2022-12-31T09:00:00Z", "UVic Intramural Volleyball Team", "long blurb about the team", ""])

// Initialize expressJS
var app = express();

// Apply compression to responses
app.use(compression())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Attach the route handlers to the URIs
app.use('/', resourceRouter);
//app.use('/search', searchRouter);

// ## Exports
module.exports = app;
