import React, {Component} from 'react';
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
import {AiFillHeart} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';

const savedEventIds = {
  "ID": ""
}

function toggleButton(){
  if (localStorage.getItem("savedEventIds") === null) {
    localStorage.setItem("savedEventIds", JSON.stringify(savedEventIds))
  }
  
}

class SaveDelete extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {}
  }

  render() {
    return (
      <>
        <Button onClick={toggleButton}><AiFillHeart /></Button>
        <Button><AiOutlineHeart /></Button>
      </>
    )
  }   
}

export default SaveDelete;