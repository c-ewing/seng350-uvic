var express = require('express');
var router = express.Router();

var db = require('./../resource_db.js');

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

// # Route Handlers
const filter_resource = function (req, res, next) {
  // Check to make sure the resource type is valid
  if (db.TABLES.some(resource => resource == req.params.resourceType)) {
    // Handle the valid request
    next()
  } else {
    // Bad request, 400 status and drop
    res.status(400)
    res.send("Bad Resource Type").end()
  }
}

const browse_resource_range = function (req, res) {
  // If start/end parameters do not exist within the request, default to 0-20 range
  let start = req.params.start ? req.params.start : 0
  let end = req.params.end ? req.params.end : db.MAX_NUM_RESULTS

  let rows_promise = db.select_by_range(req.params.resourceType, start, end)

  rows_promise.then((rows) => {
    if (rows) {
      res.json(rows)
    } else {
      // Error of some sort, just 404
      res.status(500)
      res.send('Server Error')
    }
  })
}

const get_resource_by_type_and_id = function (req, res) {
  let row_promise = db.select_by_id(req.params.resourceType, req.params.id)

  row_promise.then((row) => {
    if (row) {
      res.json(row)
    } else {
      res.status(404)
      res.send("Unknown Event ID: " + req.params.id)
    }
  })
}

const get_resource_by_id = function (req, res) {
  let row_promise = db.select_by_id(req.params.id)

  row_promise.then((row) => {
    if (row) {
      res.json(row)
    } else {
      res.status(404)
      res.send("Unknown Event ID: " + req.params.id)
    }
  })
}

// # GET Routes
// First filter bad requests, then handle valid resource listing requests
router.get('/resources/:resourceType/', [filter_resource, browse_resource_range])
router.get('/resources/:resourceType/id/:id', [filter_resource, get_resource_by_type_and_id])
router.get('/resources/id/:id', [get_resource_by_id])
router.get('/resources/:resourceType/range/:start(\\d+)-:end(\\d+)', [filter_resource, browse_resource_range])

// # Exports
module.exports = router;
