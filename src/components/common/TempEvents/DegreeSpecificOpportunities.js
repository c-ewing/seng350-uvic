import React, { Component } from 'react';

let degreeSpecificOpportunities = [{
    "id":                   "d1",
    "title":                "Conference",
    "startdate":          "November 5th", 
    "endDate":             "November 6th", 
    "shortDescription":    "short description",
    "longDescription":     "long description", 
    "image":                "" 
},{
    "id":                   "d2", 
    "title":                "Seminar",
    "startdate":          "November 5th", 
    "endDate":             "November 6th",
    "shortDescription":    "short description",
    "longDescription":     "long description",
    "image":                "" 
}]

export default function DegreeSpecificOpportunities() {
  return (
    degreeSpecificOpportunities
  )
}


