import React, { Component } from 'react';
import { MDBCol, MDBInput, MDBRow } from "mdbreact";

import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import NavbarComponent from './NavbarComponent';
import LoaderComponent from './LoaderComponent';
import DayJS from 'react-dayjs';

export default class AdComponent extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false,
      user: {},
    };
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      // let id = this.props.match.params.id
      let headers = {
        headers: {
          'API-TOKEN': localStorage.getItem('token')
        }
      }

      axios.get(`http://127.0.0.1:8000/api/users/profile`, headers)
        .then(res => {
          this.setState({ user: res.data })
        })
        .catch(error => {
          console.log(error.response)
        })
    } else {
      // this.setState({ redirect: true })
      // How to do here ? Login redirect ?
    }
  }

  render() {
    return (
      <>
        <div className="container my-5">
          {
            this.state.user && this.state.user.profile
              ?
              <MDBRow>
                <MDBCol md="6">
                  <MDBInput label="Nom" value={this.state.user.name} />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput label="Email" value={this.state.user.email} />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput label="Adresse" value={this.state.user.profile.address} />
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput label="Telephone" value={this.state.user.profile.phone} />
                </MDBCol>
              </MDBRow>
              :
              <div className="d-flex justify-content-center">
                <LoaderComponent />
              </div>
          }
        </div>
      </>
    )
  }
}