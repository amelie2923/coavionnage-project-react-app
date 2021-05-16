import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import NavbarComponent from '../Components/NavbarComponent';
import GetAdsComponent from '../Components/GetAdsComponent';
import SearchDateFormComponent from '../Components/SearchDateFormComponent';
// import CreateAlertComponent from '../Components/CreateAlertComponent';

export default class AllAdsPage extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <p></p>
        <SearchDateFormComponent />
        {/* <Link className="btn secondary" to="/create-alert"><MDBIcon icon="bell" /> Créer une alerte</Link> */}
        {/* <CreateAlertComponent /> */}
        <GetAdsComponent />
      </div>
    )
  }
}

