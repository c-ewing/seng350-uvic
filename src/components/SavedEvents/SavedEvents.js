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
import TempEvents from '../common/TempEventDatabase'

const containerStyle = {
    display: "flex",
    flexFlow: "row wrap",
}

const childStyle = {
    width: "400px",
    margin: " 10px auto",
}

// async function fetchJSON() {
//     const response = await fetch('http://localhost:3000/resources/SportsTeams')
//     const json = response.json()
//     return json
// }

// fetchJSON().then((json) => {
//     console.log(json)
// })

export default function SavedEvents() {
    return (
        <>  
            
            <SavedEvent value={TempEvents()} />
        </>
    )   
}

function EventType({ value, name, children, ...props }){
    const [showFirstElement, setShowFirstElement] = useState(false);
    const toggleFirstElement = () => setShowFirstElement(!showFirstElement);
    if(value.length != 0){
        return (
            <div style={{border: "1px solid black", margin: "10px"}}>
                <h1>Temp list of all events</h1>
                <Button style={{margin: 10}} onClick={toggleFirstElement}>
                    <h1>{name}</h1>
                </Button>
                <MDBCollapse show={showFirstElement} className='mt-3'>
                    {value.map(item => <Event
                    id={item.id} 
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

function SavedEvent({ value, name, children, ...props }){
    let saved = []
    var savedEvents = localStorage.getItem('savedEventIds')
    var e = JSON.parse(savedEvents);
    for(let i = 0; i < e.IDs.length; i++){
        for(let j = 0; j < value.length; j++){
            if(e.IDs[i] == value[j].id){
                saved.push(value[j]) 
            }
        }
    }
    if(saved.length == 0){
        return (
            <h1>You currently have no Saved Events</h1>
        )
    }
    return (
        <>
            <h1>Saved Events</h1>
            <div style={containerStyle}>
                <div style={childStyle}>
                    {saved.map(item => <Event
                        id={item.id} 
                        title={item.title} 
                        startDate = {item.startdate}
                        endDate = {item.endDate}
                        shortDescription = {item.shortDescription}
                        longDescription = {item.longDescription}
                        image={item.image}
                    ></Event>)}
                </div>
            </div>
        </>
    )
}