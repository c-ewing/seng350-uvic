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

class SaveDelete extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {}
  }

  render() {
    return (
      <>
        <p>Save/Delete</p>
      </>
    )
  }   
}

export default SaveDelete;