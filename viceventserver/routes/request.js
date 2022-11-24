var express = require('express');
var moment = require('moment')
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

var db = require('../resource_db.js');

// # Request Handlers
const validate_request = function (req, res, next) {
    // Need: type, title, startDate, endDate, shortDesc, longDesc, opt(Image)
    body_json = req.body[0]

    let type = body_json['type']                    // must exist, may be an array of types
    let title = body_json['title']                  // must exist
    let startDate = body_json['startDate']          // can be empty
    let endDate = body_json['endDate']              // can be empty
    let shortDesc = body_json['shortDescription']   // Must exist
    let longDesc = body_json['longDescription']     // Should exist
    let image = body_json['image']                  // can be empty

    // Make sure these guys aren't empty/null
    if (!type || !title || !shortDesc || !longDesc) {
        res.status(400).send("Type, Title, Short and Long descriptions are required")
        return
    }
    // Make sure the type matches one in the db
    if (!(db.TABLES.some(resource => resource == type))) {
        res.status(400).send(`Type must be one of the resource types: ${db.TABLES}`)
        return
    }
    // Check the dates are formatted correctly if they are provided
    if (!startDate) {
        if (!moment(startDate, moment.ISO_8601, true).isValid()) {
            res.status(400).send(`startDate must conform to ISO 8601`)
            return
        }
    }

    if (!endDate) {
        if (!moment(endDate, moment.ISO_8601, true).isValid()) {
            res.status(400).send(`startDate must conform to ISO 8601`)
            return
        }
    }

    // Data is validated, handoff to the actual handler
    next()
}

const request_handler = function (req, res) {
    // type, title, startDate, endDate, shortDesc, longDesc Have all been previously validated
    body_json = req.body[0]

    let type = body_json['type']                    // must exist, may be an array of types
    let title = body_json['title']                  // must exist
    let startDate = body_json['startDate']          // can be empty
    let endDate = body_json['endDate']              // can be empty
    let shortDesc = body_json['shortDescription']   // Must exist
    let longDesc = body_json['longDescription']     // Should exist
    let image = body_json['image']                  // can be empty

    // Generate a (probably) unique id for inserting into the DB
    let id = uuidv4()

    // Insert into the DB, if theres an error for some reason send it back to the requester
    // TODO: errors
    let insert_promise = db.insert_data(type, id, title, startDate, endDate, shortDesc, longDesc, image)
    insert_promise.then((_, err) => {
        if (err) {
            console.log("Some error besides a SQLite Error")
            res.status(400).send(err)
        } else {
            res.send('success')
        }
    }).catch((err) => {
        console.log(err.code)
        if (err.code == "SQLITE_CONSTRAINT"){
            res.status(400).send('Event already exists')
        } else{
            res.status(400).send(err)
        }
        
    })
}

// # Post Routes
router.post('/request/', [validate_request, request_handler])

// # Exports
module.exports = router;