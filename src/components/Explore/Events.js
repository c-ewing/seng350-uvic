import React from 'react';
import {useState, useEffect} from 'react';
import {MDBCollapse} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import Event from '../common/Event'
import EventFetcher from '../common/EventFetcher'
import { FaSdCard } from 'react-icons/fa';


export default function Events() {
    let data = EventFetcher("http://localhost:3000/resources/Events")
    return (
        <>  
            <EventType value={data} name={"Events"}/>  
        </>
    )   
}

function EventType({ value, name, children, ...props }){
    const [showFirstElement, setShowFirstElement] = useState(false);
    const toggleFirstElement = () => setShowFirstElement(!showFirstElement);


    let eventMap = new Map();
    for(var item = 0; item < value.length; item++) {
        console.log(value[item])
        value[item].type = name
        eventMap.set(
            <Event
            type={value[item].type}  
            id={value[item].id} 
            title={value[item].title} 
            startDate = {value[item].startDate}
            endDate = {value[item].endDate}
            shortDescription = {value[item].shortDescription}
            longDescription = {value[item].longDescription}
            image={value[item].image}
            ></Event>
        )     
    }

    if(value.length != 0){
        return (
            <div style={{border: "1px solid black", margin: "10px"}}>
                <h1> List of All Events</h1>
                <Button style={{margin: 10}} onClick={toggleFirstElement}>
                    <h1>{name}</h1>
                    <p></p>
                </Button>
                <MDBCollapse show={showFirstElement} className='mt-3'>
                    <p></p>{eventMap}<p></p>
                </MDBCollapse>
            </div>
        ) 
    }else {
        return (
            <p></p>
        )
    } 
}

