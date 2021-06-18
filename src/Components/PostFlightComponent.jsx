import React, { Component } from 'react'
// import NavbarComponent from '../Components/NavbarComponent';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const arrivalCities = [
//   "Paris",
//   "Marseille"
// ];

// const animalType = [
//   "Chien",
//   "Chat"
// ]

// const companies = [
//   "FrenchBee",
//   "Corsair",
//   "Air France",
//   "Air Austral"
// ];

export default class PurposeFlightComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      date: '',
      departure_city: '',
      arrival_city: '',
      company: '',
      description: '',
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

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    // console.log('image envoyée')

    let bodyFormData = new FormData();
    bodyFormData.set('date', this.state.date);
    bodyFormData.set('departure_city', this.state.departure_city);
    bodyFormData.set('arrival_city', this.state.arrival_city);
    bodyFormData.set('company', this.state.company);
    bodyFormData.set('description', this.state.description);

    let headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }

    axios.post('https://api.animal-airline.com/public/api/planetickets/add', bodyFormData, headers)
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
    if (this.state.redirect) {
      return (<Redirect to="/" />)
    };
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <h1 className='font-weight-bold mb-0 pt-md-5 pt-5'>
                Proposer un vol
              </h1>
              <form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
                <p style={{ color: '#757575' }}>Date et heure de départ indiquée sur le billet:</p>
                <input type="datetime-local" id="start" name="trip-start"
                  min="2021-01-01" onChange={this.handleDateChange} required />
                <MDBInput label="Ville de départ" onChange={this.handleDepartureCityChange} group type="text" validate required />
                <MDBInput label="Ville d'arrivée" onChange={this.handleArrivalCityChange} group type="text" validate required />
                <MDBInput label="Compagnie" onChange={this.handleCompanyChange} group type="text" validate required />
                <MDBInput type="textarea" onChange={this.handleDescriptionChange} label="Description de votre annonce" rows="5" required />
                {/* <MDBBtn type="button" color='light-blue'>Enregistrer en tant que brouillon</MDBBtn> */}
                <MDBBtn type="submit" color='light-blue'>
                  Mettre en ligne
                </MDBBtn>
                {/* <MDBBtn
                  type="button"
                  gradient="blue"
                  className="btn-block z-depth-1a"
                >
                  Mettre en ligne
                </MDBBtn> */}
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    )
  }
}
