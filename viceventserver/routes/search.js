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
const search_by_term_with_resource = function (req, res) {
  let term = req.params.term ? req.params.term : ""
  let start = req.params.start ? req.params.start : 0
  let end = req.params.end ? req.params.end : db.MAX_NUM_RESULTS
  // Table is special as we want to limit the selectable tables
  let table = ''

  if (db.TABLES.some(resource => resource == req.params.resourceType)) {
    table = req.params.resourceType
  } else {
    // Bad request, 400 status and drop
    res.status(400)
    res.send("Bad Resource Type").end()
    return
  }

  let rows_promise = db.select_where(term, table, start, end)

  rows_promise.then((rows) => {
    if (rows) {
      // Remove the long description to save response space
      rows.map(row => row.longDescription = "")
      res.json(rows)
    } else {
      // Error of some sort, just 404
      res.status(500)
      res.send('Server Error')
    }
  })
}

const search_by_term_without_resource = function (req, res) {
  let term = req.params.term ? req.params.term : ""
  let start = req.params.start ? req.params.start : 0
  let end = req.params.end ? req.params.end : db.MAX_NUM_RESULTS
  // Table is special as we want to limit the selectable tables
  let tables = db.TABLES

  let rows_promise = db.select_where_all_tables(term, tables, start, end)

  rows_promise.then((rows) => {
    if (rows) {
      // Remove the long description to save response space
      rows.map(row => row.longDescription = "")
      res.json(rows)
    } else {
      // Error of some sort, just 404
      res.status(500)
      res.send('Server Error')
    }
  })
}

// # Get Routes
router.get('/search/:term/', [search_by_term_without_resource])
router.get('/search/:term/resource/:resourceType', [search_by_term_with_resource])
router.get('/search/:term/range/:start(\\d+)-:end(\\d+)', [search_by_term_without_resource])
router.get('/search/:term/resource/:resourceType/range/:start(\\d+)-:end(\\d+)', [search_by_term_with_resource])


// # Exports
module.exports = router;