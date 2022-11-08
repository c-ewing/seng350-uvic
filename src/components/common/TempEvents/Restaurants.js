import React, { Component } from 'react';

let restaurants = [{
    "id":                   "r1",
    "title":                "Wendys",
    "startdate":          "November 5th", 
    "endDate":             "November 6th", 
    "shortDescription":    "short description",
    "longDescription":     "long description", 
    "image":                "" 
},{
    "id":                   "r2", 
    "title":                "Burger King",
    "startdate":          "November 5th", 
    "endDate":             "November 6th",
    "shortDescription":    "short description",
    "longDescription":     "long description",
    "image":                "" 
}]

export default function Restaurants() {
  return (
    restaurants
  )
}


