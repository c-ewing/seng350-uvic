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

const NUM_RESULTS = 10

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

const handle_valid = function (req, res) {
  if (req.params.id) {
    // ID specified, return specific event
    resource_db.get(`SELECT * FROM ${req.params.resourceType} WHERE id = "${req.params.id}"`, function (err, row) {
      if (err) {
        console.error("Failure to get specific row: ", err)
      } else {
        res.json(row)
      }
    })

  } else {
    // No ID specified, get a list of results
    resource_db.all(`SELECT * FROM ${req.params.resourceType} LIMIT ${NUM_RESULTS}`, function (err, rows) {
      if (err) {
        console.error("Failure to get result rows: ", err)
      } else {
        // Remove the long description to save response space
        rows.map(row => row.longDescription = "")
        res.json(rows)
      }
    })
  }

}

/* GET resource. */
// First filter bad requests, then handle valid ones
router.get('/:resourceType/:id?', [filter_req, handle_valid])

/* POST request. */
// Handle event suggestions
router.post('/submit', (req, res) => {
  res.status(418)
  res.send("Unimplemented").end()
})

module.exports = router;
