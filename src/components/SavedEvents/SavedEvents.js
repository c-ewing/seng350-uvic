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
import Event from '../common/Event'


// hard coded events, will pull from server in future
const sportsTeams = [{
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

const Restaurants = [{
    "id":                   "",
    "title":                "Mcdonalds",
    "startdate":          "November 5th", 
    "endDate":             "November 6th", 
    "shortDescription":    "short description",
    "longDescription":     "long description", 
    "image":                "" 
},{
    "id":                   "", 
    "title":                "Wendys",
    "startdate":          "November 5th", 
    "endDate":             "November 6th",
    "shortDescription":    "short description",
    "longDescription":     "long description",
    "image":                "" 
}]

const Clubs = []
const Events = []
const VicResources = []
const DegSpecificOps = []
const JobOps = []

export default function SavedEvents() {
    return (
        <>
            <h1>Saved Events</h1>
            <EventType value={sportsTeams} name={"Sports Teams"} />
            <EventType value={Restaurants} name={"Restaurants"}/>
            <EventType value={Clubs} name={"School Clubs"}/>
            <EventType value={Events} name={"Events"}/>
            <EventType value={VicResources} name={"VicResources"}/>
            <EventType value={DegSpecificOps} name={"DegSpecificOps"}/>
            <EventType value={JobOps} name={"JobOps"}/>
        </>
    )
}

function EventType({ value, name, children, ...props }){
    const [showFirstElement, setShowFirstElement] = useState(false);
    const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
    if(value.length != 0){
        return (
            <div style={{}}>
                <Button style={{margin: 10}} onClick={toggleFirstElement}>
                    <h1>{name}</h1>
                </Button>
                <MDBCollapse show={showFirstElement} className='mt-3'>
                    {value.map(item => <Event 
                    title={item.title} 
                    startDate = {item.startdate}
                    endDate = {item.endDate}
                    shortDescription = {item.shortDescription}
                    longDescription = {item.longDescription}
                    image={item.image}
                    ></Event>)}
                </MDBCollapse>
            </div>
        ) 
    }else {
        return (
            <p></p>
        )
    }
    
}