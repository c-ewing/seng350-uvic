import React from 'react';
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
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import { Button } from 'react-bootstrap';

const container = {
    height: "auto",
    margin: "20px",
    border: "2px solid grey",
    borderRadius: "10px",
    padding: "10px"
}

export default function SavedEvents() {
    const [showShow1, setShowShow1] = useState(false);
    const [showShow2, setShowShow2] = useState(false);
    const [showShow3, setShowShow3] = useState(false);
    const [showShow4, setShowShow4] = useState(false);
    const [showShow5, setShowShow5] = useState(false);
    const [showShow6, setShowShow6] = useState(false);
    const [showShow7, setShowShow7] = useState(false);

    const toggleShow1 = () => setShowShow1(!showShow1);
    const toggleShow2 = () => setShowShow2(!showShow2);
    const toggleShow3 = () => setShowShow3(!showShow3);
    const toggleShow4 = () => setShowShow4(!showShow4);
    const toggleShow5 = () => setShowShow5(!showShow5);
    const toggleShow6 = () => setShowShow6(!showShow6);
    const toggleShow7 = () => setShowShow7(!showShow7);
    return (
        <>
        <div style={container} className='sports-teams container'>
            <h1>Sports Teams</h1>
            <Button onClick={toggleShow1}>Hide/Show</Button>
            <MDBCollapse show={showShow1}>
                <MDBCol sm='12'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>
                                Special title treatment
                                </MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBBtn href='#'>Go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBCollapse>
        </div>
        <div style={container} className='restaurants container'>
            <h1>Restaurants</h1>
            <Button onClick={toggleShow2}>Hide/Show</Button>
            <MDBCollapse show={showShow2}>
                <MDBCol sm='12'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>
                                Special title treatment
                                </MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBBtn href='#'>Go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBCollapse>
        </div>
        <div style={container} className='school-clubs container'>
            <h1>School Clubs</h1>
            <Button onClick={toggleShow3}>Hide/Show</Button>
            <MDBCollapse show={showShow3}>
                <MDBCol sm='12'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>
                                Special title treatment
                                </MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBBtn href='#'>Go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBCollapse>
        </div>
        <div style={container} className='events container'>
            <h1>Events</h1>
            <Button onClick={toggleShow4}>Hide/Show</Button>
            <MDBCollapse show={showShow4}>
                <MDBCol sm='12'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>
                                Special title treatment
                                </MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBBtn href='#'>Go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBCollapse>
        </div>
        <div style={container} className='vic-resources container'>
            <h1>Victoria Resources</h1>
            <Button onClick={toggleShow5}>Hide/Show</Button>
            <MDBCollapse show={showShow5}>
                <MDBCol sm='12'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>
                                Special title treatment
                                </MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBBtn href='#'>Go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBCollapse>
        </div>
        <div style={container} className='deg-opportunities container'>
            <h1>Degree Specific Opportunities</h1>
            <Button onClick={toggleShow6}>Hide/Show</Button>
            <MDBCollapse show={showShow6}>
                <MDBCol sm='12'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>
                                Special title treatment
                                </MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBBtn href='#'>Go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBCollapse>
        </div>
        <div style={container} className='job-opportunities container'>
            <h1>Job Opportunities</h1>
            <Button onClick={toggleShow7}>Hide/Show</Button>
            <MDBCollapse show={showShow7}>
                <MDBCol sm='12'>
                    <MDBCard>
                        <MDBCardBody>
                            <MDBCardTitle>
                                Special title treatment
                                </MDBCardTitle>
                            <MDBCardText>
                                With supporting text below as a natural lead-in to additional content.
                            </MDBCardText>
                            <MDBBtn href='#'>Go somewhere</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBCollapse>
        </div>
        
        </>
    );

}