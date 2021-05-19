// here the form component to purpose a flight
// https://www.blablacar.fr/offer-seats/departure
import React, { Component } from 'react'
// import NavbarComponent from '../Components/NavbarComponent';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import dayjs from 'dayjs';

// const minDate = dayjs(new Date()).format('DD/MM/YYYY')

export default class EditAdComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      animal_name: '',
      options: [],
      type_search_id: '',
      departure_city: '',
      arrival_city: '',
      company: '',
      description: '',
      image: '',
      date: '',
      redirect: false,
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
      axios.get(`http://127.0.0.1:8000/api/ads/${id}`, headers)
        .then(res => {
          this.setState({
            animal_name: res.data.animal_name,
            type_search_id: res.data.type_search_id,
            departure_city: res.data.departure_city,
            arrival_city: res.data.arrival_city,
            company: res.data.company,
            description: res.data.description,
            image: res.data.image,
            date: res.data.date,
          });
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error);
        })

      axios.get('http://127.0.0.1:8000/api/typesearchs/', headers)
        .then(res => {
          let typeSearchs = res.data.map(typesearch => {
            return { value: typesearch.id, display: typesearch.name }
          });
          this.setState({
            options: [{
              value: '', display: 'Selectionner le type d\'animal'
            }].concat(typeSearchs)
          });
        }).catch(error => {
          console.log(error);
        });
    }
  }

  handleTypeSearch = event => {
    this.setState({
      type_search_id: event.target.value
    }, () => {
      console.log(this.state);
    });
  };

  handleAnimalNameChange = event => {
    this.setState({ animal_name: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleDateChange = event => {
    this.setState({ date: event.target.value }, () => {
      console.log(this.state);
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

  handleImageChange = event => {
    console.log(event.target.files);
    this.setState({ image: event.target.files[0] }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let bodyFormData = new FormData();
    bodyFormData.append('_method', 'PUT');
    bodyFormData.set('animal_name', this.state.animal_name);
    bodyFormData.set('type_search_id', this.state.type_search_id);
    bodyFormData.set('departure_city', this.state.departure_city);
    bodyFormData.set('arrival_city', this.state.arrival_city);
    bodyFormData.set('company', this.state.company);
    bodyFormData.set('description', this.state.description);
    bodyFormData.set('image', this.state.image);
    bodyFormData.set('date', this.state.date);

    if (localStorage.getItem('token')) {
      let id = this.props.match.params.id
      let headers = {
        headers: {
          'API-TOKEN': localStorage.getItem('token')
        }
      }

      axios.post(`http://127.0.0.1:8000/api/ads/edit/${id}`, bodyFormData, headers)
        .then(res => {
          this.setState({ redirect: true })
          console.log(res)
        })
        .catch(error => {
          console.log('error');
          if (error.response.status === 401) {
            this.setState({ errors: error.response.data.errors }, () => {
              console.log(this.state)
            })
          }
        })
    };
  };

  render() {
    //to do : change redirection link
    if (this.state.redirect) {
      return (<Redirect to="/association-dashboard" />)
    }
    // console.log(this.state.date)
    // console.log("Date " + dayjs(this.state.date).format('DD-MM-YYYY'))
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <h1 className='font-weight-bold mb-0 pt-md-5 pt-5'>
                Rechercher un vol
              </h1>
              <form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data">
                {/* <input type="hidden" name="_method" value="PUT" /> */}
                <MDBInput label="Nom de l'animal" value={this.state.animal_name} onChange={this.handleAnimalNameChange} group type="text" validate />
                <p style={{ color: '#757575' }}>Type d'animal :</p>
                <select value={this.state.type_search_id}
                  onChange={this.handleTypeSearch}>
                  {this.state.options.map((option, i) => <option key={i} value={option.value}>{option.display}</option>)}
                </select>
                <p style={{ color: '#757575' }}>Date de départ :</p>
                <input type="date" id="start" name="trip-start" value={dayjs(this.state.date).format('DD/MM/YYYY')}
                  onChange={this.handleDateChange} />
                <MDBInput label="Ville de départ" value={this.state.departure_city} onChange={this.handleDepartureCityChange} group type="text" validate />
                <MDBInput label="Ville d'arrivée" value={this.state.arrival_city} onChange={this.handleArrivalCityChange} group type="text" validate />
                <MDBInput label="Compagnie" value={this.state.company} onChange={this.handleCompanyChange} group type="text" validate />
                <MDBInput type="textarea" value={this.state.description} onChange={this.handleDescriptionChange} label="Description de votre annonce" rows="5" />
                <div className="form-group">
                  <label style={{ color: '#757575' }} htmlFor="exampleFormControlFile1">Ajouter une photo</label>
                  <input type="file" className="form-control-file" id="exampleFormControlFile1" accept="image/*" onChange={this.handleImageChange} />
                </div>
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
