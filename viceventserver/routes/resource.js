const { query: select_query } = require('express');
var express = require('express');
const sqlite3 = require('sqlite3');
var router = express.Router();

/*
| Resource Type | Type name |
| ------------- | --------- |
| Sports Team   | SportsTeams |
| Restaurant    | Restaurants |
| School Club   | SchoolClubs |
| Event         | Events     |
| Victoria Resource | VictoriaResources |
| Degree Specific Opportunity | DegreeSpecificOpportunities |
| Job Opportunity | JobOpportunities |
*/
const resource_types = ["DegreeSpecificOpportunities", "Events", "JobOpportunities", "Restaurants",
  "SchoolClubs", "SportsTeams", "VictoriaResources"]

const MAX_NUM_RESULTS = 20

// ## Database
// Open the DB 
const resource_db = new sqlite3.Database('./resource_database.db', (err) => {
  if (err) {
    console.error("Error opening database " + err.message);
  }
})

// ## Route Handlers
const filter_req = function (req, res, next) {
  // Check to make sure the resource type is valid
  if (resource_types.some(resource => resource == req.params.resourceType)) {
    // Handle the valid request
    next()
  } else {
    // Bad request, 400 status and drop
    res.status(400)
    res.send("Bad Resource Type").end()
  }
}

function handle_id(req, res) {
  resource_db.get(`SELECT * FROM ${req.params.resourceType} WHERE id = "${req.params.option}"`, function (err, row) {
    if (err) {
      console.error("Failure to get specific row: ", err)
    } else {
      if (row) {
        res.json(row)
      } else {
        res.status(404)
        res.send("Unknown Event ID: " + req.params.option)
      }
    }
  })
}

// TODO: VALIDATE
function handle_range(req, res, range) {
  var limit = MAX_NUM_RESULTS
  var offset = 0

  // Determine values for the limit and offset of the query based on the url parameters
  if (range) {
    parse_vals = req.params.option.split('-')
    console.debug(`PARSED: ${parse_vals}`)

    limit = ((parse_vals[1] - parse_vals[0]) > MAX_NUM_RESULTS) ? MAX_NUM_RESULTS : parse_vals[1] - parse_vals[0]
    offset = parse_vals[0]
  }

  resource_db.all(`SELECT * FROM ${req.params.resourceType} ORDER BY ${req.params.resourceType}.id LIMIT ${limit} OFFSET ${offset}`, function (err, rows) {
    if (err) {
      console.error("Failure to get result rows: ", err)
    } else {
      // Remove the long description to save response space
      rows.map(row => row.longDescription = "")
      res.json(rows)
    }
  })
}

const handle_valid = function (req, res) {
  if (req.params.option) {
    // Determine if we want a range of search results or if we are looking for a specific resource ID
    req.params.option.includes('-') ? handle_range(req, res, true) : handle_id(req, res)
  } else {
    // No ID specified, get a list of results starting at 0 up to MAX_NUM_RESULTS
    handle_range(req, res, false)
  }
}

/* GET resource. */
// First filter bad requests, then handle valid ones
router.get('/:resourceType/:option?', [filter_req, handle_valid])

/* POST request. */
// Handle event suggestions
router.post('/submit', (req, res) => {
  res.status(418)
  res.send("Unimplemented").end()
})

module.exports = router;
