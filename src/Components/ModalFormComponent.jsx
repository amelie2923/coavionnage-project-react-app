import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput, MDBBtn } from "mdbreact";
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class CreateAlertComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      date: '',
      departure_city: '',
      arrival_city: '',
      company: '',
      errors: [],
    };
  };

  handleDateChange = event => {
    this.setState({
      date: event.target.value
    });
  };

  handleDepartureCityChange = event => {
    this.setState({ departure_city: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleArrivalCityChange = event => {
    this.setState({ arrival_city: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleCompanyChange = event => {
    this.setState({ company: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);

    let bodyFormData = new FormData();
    bodyFormData.set('date', this.state.date);
    bodyFormData.set('departure_city', this.state.departure_city);
    bodyFormData.set('arrival_city', this.state.arrival_city);
    bodyFormData.set('company', this.state.company);

    let headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }

    axios.post('https://api.animal-airline.com/public/api/alerts/add', bodyFormData, headers)
      .then(res => {
        this.setState({ redirect: true })
        console.log(res.data)
      })
      .catch(error => {
        console.log('error');
        if (error.response.status === 401) {
          this.setState({ errors: error.response.data.errors }, () => {
            console.log(this.state)
          })
        }
      })
    this.setState({ redirect: true });
  };

  render() {
    console.log(this.state)
    if (this.state.redirect) {
      return (<Redirect to="/all-ads" />)
    };
    return (
      <>
        <form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
          <p style={{ color: '#757575' }}>Date de départ souhaitée:</p>
          <input type="date" id="start" name="trip-start"
            min="2021-01-01" onChange={this.handleDateChange} />
          <MDBInput label="Ville de départ" onChange={this.handleDepartureCityChange} group type="text" validate />
          <MDBInput label="Ville d'arrivée" onChange={this.handleArrivalCityChange} group type="text" validate />
          <MDBInput label="Compagnie" onChange={this.handleCompanyChange} group type="text" validate />
          <MDBModalFooter>
            <MDBBtn type="submit" color="deep-orange">Créer l'alerte</MDBBtn>
          </MDBModalFooter>
        </form>
      </>
    )
  }
}