import React from "react";
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';



export default function Profile() {
    let navigate = useNavigate(); 
    const routeChange = () => { 
        let path = `/Profile/EditProfile`; 
        navigate(path);
    }
    const items = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')).interests : []


    return (
        <div className="vh-100" style={{ backgroundColor: '#eee'}}>
            <MDBContainer className="container py-5 h-100">
            <MDBTypography className="mb-4 pb-2" tag="h1">My Profile</MDBTypography>
                <MDBRow className="justify-content-center align-items-left h-100">
                    <MDBCol md="12" xl="4">
                <MDBCard style={{ borderRadius: '15px' }}>
                <MDBCardBody className="text-center">
                    <div className="mt-3 mb-4 pb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                        className="rounded-circle" fluid style={{ width: '150px' }} />
                    </div>
                    <MDBTypography tag="h4">User Name</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                    Home Country
                    </MDBCardText>
                    <MDBCardText className="text-muted mb-4">
                    Degree
                    </MDBCardText>
                    <MDBBtn onClick={routeChange} rounded size="lg">
                    Edit Profile
                    </MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol md="12" xl="7">
                <MDBCard style={{ borderRadius: '15px' }}>
                <MDBCardBody className="text-center">
                    <MDBTypography tag="h4">Your Interests</MDBTypography>
                    <div className="mb-4 pb-2">
                        {items.map(item => <MDBBtn color={'primary'} style={{ margin: 5}}>{item}</MDBBtn>)}
                    </div>
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

