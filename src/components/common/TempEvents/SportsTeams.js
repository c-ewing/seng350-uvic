import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCollapse
} from 'mdb-react-ui-kit';
import {useState} from 'react';
import { Button } from 'react-bootstrap';

let sportsTeams = [{
    "id":                   "",
    "title":                "Canucks",
    "startdate":          "November 5th", 
    "endDate":             "November 6th", 
    "shortDescription":    "short description",
    "longDescription":     "long description", 
    "image":                "" 
},{
    "id":                   "", 
    "title":                "Flames",
    "startdate":          "November 5th", 
    "endDate":             "November 6th",
    "shortDescription":    "short description",
    "longDescription":     "long description",
    "image":                "" 
}]

export default function SportsTeams() {
  return (
    sportsTeams
  )
}


