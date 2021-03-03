import React, { Component } from 'react'
import NavbarComponent from '../Components/NavbarComponent';
import { MDBContainer, MDBInput, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from "mdbreact";


// !

// const arrivalCities = [
//   "Paris",
//   "Marseille"
// ];

// const companies = [
//   "FrenchBee",
//   "Corsair",
//   "Air France",
//   "Air Austral"
// ];



export default class PostAdComponent extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <>
        <NavbarComponent />
        <MDBContainer>

          {/*
            Inputs :
            'type_search_id',
            'date',
            'departure_city',
            'arrival_city',
            'number_animals',
            'description',
            'company',
            'image',
          */}
        </MDBContainer>
      </>
    )
  }
}
