import React, { Component } from 'react'
// import NavbarComponent from '../Components/NavbarComponent';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from 'axios';
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

export default class EditFlightComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      departure_city: '',
      arrival_city: '',
      company: '',
      description: '',
      errors: [],
    };
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      let id = this.props.match.params.id
      let headers = {
        headers: {
          'API-TOKEN': localStorage.getItem('token')
        }
      }
      axios.get(`https://api.animal-airline.com/public/api/planetickets/${id}`, headers)
        .then(res => {
          this.setState({
            date: res.data.date,
            departure_city: res.data.departure_city,
            arrival_city: res.data.arrival_city,
            company: res.data.company,
            description: res.data.description,
          });
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }

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
    bodyFormData.append('_method', 'PUT');
    bodyFormData.set('date', this.state.date);
    bodyFormData.set('departure_city', this.state.departure_city);
    bodyFormData.set('arrival_city', this.state.arrival_city);
    bodyFormData.set('company', this.state.company);
    bodyFormData.set('description', this.state.description);

    if (localStorage.getItem('token')) {
      let id = this.props.match.params.id
      let headers = {
        headers: {
          'API-TOKEN': localStorage.getItem('token')
        }
      }

      axios.post(`https://api.animal-airline.com/public/api/planetickets/edit/${id}`, bodyFormData, headers)
        .then(res => {
          console.log(res.data)
        })
        .catch(error => {
          console.log('error');
          if (error.response.status === 422) {
            this.setState({ errors: error.response.data.errors }, () => {
              console.log(this.state)
            })
          }
        })
    };
  }

  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <h1 className='font-weight-bold mb-0 pt-md-5 pt-5'>
                Proposer un vol
              </h1>
              <form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
                <p style={{ color: '#757575' }}>Date de départ :</p>
                <input type="date" id="start" name="trip-start"
                  min="2021-01-01" onChange={this.handleDateChange} />
                <MDBInput label="Ville de départ" value={this.state.departure_city} onChange={this.handleDepartureCityChange} group type="text" validate />
                <MDBInput label="Ville d'arrivée" value={this.state.arrival_city} onChange={this.handleArrivalCityChange} group type="text" validate />
                <MDBInput label="Compagnie" value={this.state.company} onChange={this.handleCompanyChange} group type="text" validate />
                <MDBInput type="textarea" value={this.state.description} onChange={this.handleDescriptionChange} label="Description de votre annonce" rows="5" />
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
