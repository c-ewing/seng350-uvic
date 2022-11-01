var express = require('express');
var router = express.Router();

/*
| Resource Type | Type name |
| ------------- | --------- |
| Sports Team   | sports-team |
| Restaurant    | restaurant |
| School Club   | school-club |
| Event         | event     |
| Victoria Resource | vic-resource |
| Degree Specific Opportunity | degree-opportunity |
| Job Opportunity | job     |
*/
const resource_types = ["sports-team", "restaurant", "school-club",
  "event", "vic-resource", "degree-opportunity", "job"]

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
  res.send("Valid")
}

/* GET resource. */
// First filter bad requests, then handle valid ones
router.get('/:resourceType/:id?', [filter_req, handle_valid])

module.exports = router;
