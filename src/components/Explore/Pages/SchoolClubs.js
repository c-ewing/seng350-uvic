import React from 'react';
import Event from '../../common/Event'
import EventFetcher from '../../common/EventFetcher'

export default function SchoolClubs() {
    let data = EventFetcher("http://localhost:3000/resources/SchoolClubs")
    return (
        <>
            <EventType value={data} />
        </>
    )
}

function EventType({ value, children, ...props }) {
    let eventMap = new Map();

    for (var item = 0; item < value.length; item++) {
        eventMap.set(
            <Event
                id={value[item].id}
                title={value[item].title}
                startDate={value[item].startDate}
                endDate={value[item].endDate}
                shortDescription={value[item].shortDescription}
                longDescription={value[item].longDescription}
                image={value[item].image}
                saved={false}
            ></Event>
        )
    }

    if (value.length !== 0) {
        return (
            <div style={{ margin: "10px" }}>
                <h1>School Clubs</h1>
                {eventMap}
            </div>
        )
    } else {
        return (
            <p>No School Clubs Added</p>
        )
    }
}

