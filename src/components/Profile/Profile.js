import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function Profile() {
    let navigate = useNavigate(); 
    const routeChange = () => { 
    let path = `/Profile/EditProfile`; 
        navigate(path);
    }


    return (
        <>
            <h1>Profile</h1>
            <Button color="primary" className="px-4"
            onClick={routeChange}
              >
              Edit Profile
            </Button>
        </>
    )
}