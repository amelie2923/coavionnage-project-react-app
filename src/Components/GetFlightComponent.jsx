import React, { Component } from 'react';
import { MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';
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
      planeticket: {},
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

      axios.get(`http://127.0.0.1:8000/api/planetickets/${id}`, headers)
        .then(res => {
          this.setState({ planeticket: res.data })
        })
        .catch(error => {
          console.log(error.response)
        })
    } else {
      this.setState({ redirect: true })
    }
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/" />)
    };
    console.log(this.state.planeticket)
    return (
      <>
        {/* <MDBCarousel
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
        </MDBCarousel> */}
        <div className="container my-5">
          {
            this.state.planeticket && this.state.planeticket.user
              ?
              <div className="row">
                <MDBCol md='6'>
                  <MDBCard>
                    <MDBCardBody>
                      {/* <MDBCardTitle>{this.state.planeticket.animal_name}</MDBCardTitle> */}
                      <h5>
                        <MDBBadge color="primary">{this.state.planeticket.user.name}</MDBBadge>
                      </h5>
                      <MDBCardText>Propose un vol pour: {this.state.planeticket.arrival_city}</MDBCardText>
                      <MDBCardText>Au départ de: {this.state.planeticket.departure_city}</MDBCardText>
                      <MDBCardText>Date et heure de départ: <DayJS format="DD-MM-YYYY HH:mm">{this.state.planeticket.date}</DayJS></MDBCardText>
                      <MDBCardText><strong>Description</strong><br></br>{this.state.planeticket.description}</MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                  {/* <p>Scannez mon code avec votre smartphone pour me proposer une place!</p> */}
                </MDBCol>
                {/* <MDBCol md='6'>
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
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol> */}
              </div>
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