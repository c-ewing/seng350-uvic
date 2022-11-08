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
import SportsTeams from '../common/TempEvents/SportsTeams'
import Restaurants from '../common/TempEvents/Restaurants'
import DegreeSpecificOpportunities from '../common/TempEvents/DegreeSpecificOpportunities'
import Events from '../common/TempEvents/Events'
import JobOpportunities from '../common/TempEvents/JobOpportunities'
import SchoolClubs from '../common/TempEvents/SchoolClubs'
import VictoriaResources from '../common/TempEvents/VictoriaResources'

// fetch('http://localhost:3000/resources/<SportsTeams>')
//         .then(response => response.json())
//         .then(data => console.log(data));

// hard coded events, will pull from server in future

export default function SavedEvents() {
    console.log(SportsTeams)
    if(SportsTeams().length + Restaurants().length + SchoolClubs().length + Events().length + VictoriaResources().length + DegreeSpecificOpportunities().length + JobOpportunities().length == 0) {
        return (
            <>
                <h1>Hey, you haven't saved any events yet. Check out the Explore Page to find some</h1>
            </>
        )
    }else {
        return (
            <>
                <h1>Saved Events</h1>
                <EventType value={SportsTeams()} name={"Sports Teams"} />
                <EventType value={Restaurants()} name={"Restaurants"}/>
                <EventType value={SchoolClubs()} name={"School Clubs"}/>
                <EventType value={Events()} name={"Events"}/>
                <EventType value={VictoriaResources()} name={"VicResources"}/>
                <EventType value={DegreeSpecificOpportunities()} name={"DegSpecificOps"}/>
                <EventType value={JobOpportunities()} name={"JobOps"}/>
            </>
        )
    }
    
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

function RecentlyDeleted({value, name, children, ...props}){
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


