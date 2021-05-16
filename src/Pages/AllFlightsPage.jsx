import React, { Component } from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Link } from 'react-router-dom';
import NavbarComponent from '../Components/NavbarComponent';
import GetFlightsComponent from '../Components/GetFlightsComponent';
import SearchDateFormComponent from '../Components/SearchDateFormComponent';
import CreateAlertComponent from '../Components/CreateAlertComponent';

export default class AllFlightsPage extends Component {
  state = {
    modal: false,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <NavbarComponent />
        {/* <Link className="btn secondary" to="/create-alert"><MDBIcon icon="bell" /> Créer une alerte</Link> */}
        <MDBRow>
          <MDBCol md='8'>
            <SearchDateFormComponent />
          </MDBCol>
          <MDBCol md='4'>
            <CreateAlertComponent />
          </MDBCol>
        </MDBRow>
        <GetFlightsComponent />
      </div>
    )
  }
}
