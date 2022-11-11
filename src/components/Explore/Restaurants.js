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
import { FaSdCard } from 'react-icons/fa';

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
            <EventType value={TempEvents()} name={"Restaurants"}/>
            
        </>
    )   
}

function EventType({ value, name, children, ...props }){
    const [showFirstElement, setShowFirstElement] = useState(false);
    const toggleFirstElement = () => setShowFirstElement(!showFirstElement);

    let eventMap = new Map();
    for(var item = 0; item < value.length; item++) {
        if(value[item].id[0] == "r") {
            eventMap.set(
                <Event  
                id={value[item].id} 
                title={value[item].title} 
                startDate = {value[item].startdate}
                endDate = {value[item].endDate}
                shortDescription = {value[item].shortDescription}
                longDescription = {value[item].longDescription}
                image={value[item].image}
                ></Event>
            )   
        }
    }
   
   
    if(value.length != 0){
        
        return (
            <div style={{border: "1px solid black", margin: "10px"}}>
                <h1>List of Events at Restaurants</h1>
                <Button style={{margin: 10}} onClick={toggleFirstElement}>
                    <h1>{name}</h1>
                </Button>
               
                <MDBCollapse show={showFirstElement} className='mt-3'>
                    {eventMap}
                </MDBCollapse>
            </div>
        ) 
    }else {
        return (
            <p></p>
        )
    } 
}