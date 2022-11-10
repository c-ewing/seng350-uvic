var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var cors = require('cors')
var db = require('./resource_db.js');

// Routes
var resourceRouter = require('./routes/resource')
var searchRouter = require('./routes/search')

// Initialize the Database:
db.check_db_structure()

// Try to insert some dummy data into SportsTeams:
// db.insert_data(db.TABLES[5], ...["3f259a09-e036-4eb7-8c83-010287c09095", "VIKES Rowing", "2022-10-31T09:00:00Z", "2022-11-31T09:00:00Z", "UVic Varsity Rowing Team", "long blurb about the rowing team", ""])
// db.insert_data(db.TABLES[5], ...["87965113-4fbf-4920-91b5-f1046417e545", "UVic Intramural Volleyball", "2022-9-31T09:00:00Z", "2022-12-31T09:00:00Z", "UVic Intramural Volleyball Team", "long blurb about the team", ""])

// Try to insert some dummy data into Events:
// db.insert_data(db.TABLES[1], ...["3b0c5ae4-d803-4ca4-a5c7-125483b99447", "Clubs Day", "2022-08-31T09:00:00Z", "2022-08-31T09:00:00Z", "UVic Clubs Day", "Clubby Things", ""])
// db.insert_data(db.TABLES[1], ...["1ce5320b-da9a-425e-b510-647fbabf97ba", "Reading Break", "2022-11-09T09:00:00Z", "2022-11-12T09:00:00Z", "UVic Reading Break", "Fall Semester Reading Break", ""])

// Try to insert some dummy data into Restaurants:
// db.insert_data(db.TABLES[3], ...["a4e7c673-b318-4fa4-a422-6ef95fd41902", "stage.", "", "", "French Inspired small sharing plates with large wine selection", "Hours + long description", ""])
// db.insert_data(db.TABLES[3], ...["0663e39c-612b-4d68-84e8-779338682809", "Agrius", "", "", "West coast inspired sharing plates and brick oven fired pizza", "Hours + long description", ""])

// Try to insert some dummy data into SportsTeams:
// db.insert_data(db.TABLES[4], ...["361b6158-8041-477e-841d-32d0462a865f", "Pickle Sisters", "", "", "UVic club dedicated to the documentation and sharing of pickles", "meeting times and events", ""])
// db.insert_data(db.TABLES[4], ...["87965113-4fbf-4920-91b5-f1046417e545", "UVic Intramural Volleyball", "2022-9-31T09:00:00Z", "2022-12-31T09:00:00Z", "UVic Intramural Volleyball Team", "long blurb about the team", ""])


// Initialize expressJS
var app = express();

// Apply compression to responses
app.use(compression())
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Attach the route handlers to the URIs
app.use('/', resourceRouter);
app.use('/', searchRouter);

// ## Exports
module.exports = app;
