import React from 'react';
import Event from '../common/Event'
import EventFetcher from '../common/EventFetcher'

export default function Restaurants() {
    let data = EventFetcher("http://localhost:3000/resources/Restaurants")
    return (
        <>  
            <EventType value={data} name={"Restaurants"}/>
        </>
    )   
}

function EventType({ value, name, children, ...props }){
    let eventMap = new Map();

    for(var item = 0; item < value.length; item++) {
            eventMap.set(
                <Event
                type={name}  
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

    if(value.length != 0){
        return (
            <div style={{margin: "10px"}}>
                <h1>Restaurants</h1>
                {eventMap}
            </div>
        ) 
    }else {
        return (
            <p></p>
        )
    } 
}