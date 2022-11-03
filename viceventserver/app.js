var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var compression = require('compression')
const sqlite3 = require('sqlite3');

// ## SQLITE QUERIES/DEFINITIONS
const TABLES = ["DegreeSpecificOpportunities", "Events", "JobOpportunities", "Restaurants",
    "SchoolClubs", "SportsTeams", "VictoriaResources"]

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

// ## Check if the DB exists, if not set it up
const resource_db = new sqlite3.Database('./resource_database.db', (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    }
})

// If the tables don't exist, create them
resource_db.all("SELECT name FROM sqlite_schema \
                    WHERE type = 'table' \
                    AND name NOT LIKE 'sqlite_%' \
                    ORDER BY 1;",
    function (err, rows) {
        if (err) {
            console.error("Error getting Tables: ", err)
        } else {
            // Check the database exists by seeing what tables are in it
            let table_names = rows.map(val => val.name)
            console.debug("Tables Exist: ", TABLES.every(table => table_names.includes(table)))
            // If not every table name is in the row: 
            if (!TABLES.every(table => table_names.includes(table))) {
                // Create tables
                TABLES.forEach(value => {
                    var create_statement = `CREATE TABLE ${value}( \
                        id TEXT PRIMARY KEY, \
                        title TEXT, \
                        startDate TEXT, \
                        endDate TEXT, \
                        shortDescription TEXT, \
                        longDescription, \
                        image TEXT \
                        )`

                    resource_db.run(create_statement)
                })
            }
        }
    }
)

// insert dummy data
if (false) {
    let dummy_insert = 'INSERT INTO SportsTeams (id, title, startDate, endDate, shortDescription, longDescription, image) VALUES (?, ?, ?, ?, ?, ?, ?)'

    resource_db.run(dummy_insert, ["3f259a09-e036-4eb7-8c83-010287c09095", "VIKES Rowing", "2022-10-31T09:00:00Z", "2022-11-31T09:00:00Z", "UVic Varsity Rowing Team", "long blurb about the rowing team", ""])
    resource_db.run(dummy_insert, ["87965113-4fbf-4920-91b5-f1046417e545", "UVic Intramural Volleyball", "2022-9-31T09:00:00Z", "2022-12-31T09:00:00Z", "UVic Intramural Volleyball Team", "long blurb about the team", ""])
}

// ## Exports
module.exports = app;
