var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:resourceType/:id?', function(req, res, next) {
  res.json(req.params);
});

module.exports = router;
