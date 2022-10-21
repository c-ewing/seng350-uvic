import GroupButtons from "./GroupButtons";
import React from "react";
import {Dropdown, Option, SubmitButton} from "./Dropdown";



export default function Profile() {
    return (
    <>
        <div>
        <h1>Profile</h1>
        <GroupButtons/>      
        </div>
        <p></p>
        <h2> Setup your Profile</h2>
        
        <div>
            <Dropdown formLabel = "Choose your degree"> 
            <Option selected value="Click to see options"/>
            <Option value="Software Engineering" />
            <Option value="Mechanical Engineering" />
            <Option value="Electrical Engineering" />
            </Dropdown>

            <Dropdown formLabel = "Choose your country">
             
            <Option selected value="Click to see options" />
            <Option value="Turkey" />
            <Option value="South Africa" />
            <Option value="Brasil"/>
            </Dropdown>
        </div>
        <div> 
            <SubmitButton buttonText="Save"></SubmitButton>
        </div>


        
        
    </>
    )
}