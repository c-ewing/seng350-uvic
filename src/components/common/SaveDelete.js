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
import { Button } from 'react-bootstrap';
import {useState} from 'react';

const savedEventIds = {
  "IDs": []
}

export default function SaveDelete({ value, children, ...props }) {
  let id = value;
  if(localStorage.getItem('savedEventIds') == null){
    localStorage.setItem('savedEventIds', JSON.stringify(savedEventIds))
  }
  var clickState = localStorage.getItem('savedEventIds').includes(id) ? true: false;
  let [isOff, setIsOff] = useState(!clickState);
  
  

  const edit = () => {
    if(!isOff){
      var savedEvents = localStorage.getItem('savedEventIds') ? JSON.parse(localStorage.getItem('savedEventIds')) : [];

      if(savedEvents.IDs.includes(id)) {
        const index = savedEvents.IDs.indexOf(value);
        if (index > -1) {
          savedEvents.IDs.splice(index, 1);
        }
      }
      else {

      }
      localStorage.setItem('savedEventIds', JSON.stringify(savedEvents));
      window.location.reload(false);
    }else {
      var savedEvents = localStorage.getItem('savedEventIds') ? JSON.parse(localStorage.getItem('savedEventIds')) : [];

      if(savedEvents.IDs.includes(id)) {
      
      }
      else {
        savedEvents.IDs.push(id)
      }

      localStorage.setItem('savedEventIds', JSON.stringify(savedEvents));
      window.location.reload(false);
    }
    
  }

  return (
    <Button onClick={() => {setIsOff(!isOff); edit()}}>{ isOff ? 'Save' : 'Remove' }</Button>
  )
};