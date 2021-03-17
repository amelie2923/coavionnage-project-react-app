import React, { Component } from 'react';
import { MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import NavbarComponent from './NavbarComponent';
import LoaderComponent from './LoaderComponent';

export default class AdComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      ad: {},
      // favorite: false,
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
          this.setState({ ad: res.data })
        })
        .catch(error => {
          console.log(error.response)
        })
      console.log(this.props.match.params.id)
    } else {
      this.setState({ redirect: true })
    }
  }

  checkFavorite() {
    let headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }

    axios.get(`http://127.0.0.1:8000/api/ads/${this.state.ad.id}/checkFavorite`, headers)
      .then(res => {
        this.setState({ favorite: res.data })
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  handleFavorite() {
    let headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }

    axios.get(`http://127.0.0.1:8000/api/ads/${this.state.ad.id}/handleFavorite`, headers)
      .then(res => {
        this.checkFavorite()
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/" />)
    };
    console.log(this.state.ad.image)
    return (
      <>
        <NavbarComponent />
        <MDBCarousel
          activeItem={1}
          length={1}
          showControls={false}
          showIndicators={false}
          className="z-depth-1"
          slide
        >
          <MDBCarouselInner>
            <MDBView>
              <MDBCarouselItem itemId="1">
                <img
                  className="img-fluid mx-auto d-block"
                  src={`http://127.0.0.1:8000/storage/pictures/${this.state.ad.image}`}
                  alt=""
                  style={{
                    height: '460px',
                  }}
                />
              </MDBCarouselItem>
            </MDBView>
          </MDBCarouselInner>
        </MDBCarousel>
        <div className="container my-5">
          {
            this.state.ad && this.state.ad.user
              ?
              <div className="row">
                <MDBCol md='6'>
                  <MDBCard>
                    <MDBCardBody>
                      <MDBCardTitle>{this.state.ad.animal_name}</MDBCardTitle>
                      <h5>
                        <MDBBadge color="primary">{this.state.ad.user.name}</MDBBadge>
                      </h5>
                      <MDBCardText>Recherche un vol pour: {this.state.ad.arrival_city}</MDBCardText>
                      <MDBCardText>Au départ de: {this.state.ad.departure_city}</MDBCardText>
                      <MDBCardText>Date: à partir du {this.state.ad.date}</MDBCardText>
                      <MDBCardText>Description<br></br>{this.state.ad.description}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  {/* <p>Scannez mon code avec votre smartphone pour me proposer une place!</p> */}
                </MDBCol>
                <MDBCol md='6'>
                  <MDBCard>
                    <MDBCardBody className="text-center">
                      {
                        this.state.favorite
                          ?
                          <>
                            <MDBIcon icon="heart red-text pr-3" onClick={() => this.handleFavorite()} /> Supprimer des favoris
                          </>
                          :
                          <>
                            <MDBIcon far icon="heart" onClick={() => this.handleFavorite()} /> Ajouter en favori
                          </>
                      }
                      {/* <p className="text-center">Here scan code</p> */}
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </div>
              :
              <div class="d-flex justify-content-center">
                <LoaderComponent />
              </div>
          }
        </div>
      </>
    )
  }
}