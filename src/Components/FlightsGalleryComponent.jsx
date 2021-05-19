import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './FlightsGalleryComponent.css';
// import * as dayjs from 'dayjs'
// import 'dayjs/locale/fr' // import locale

// dayjs().format()
import DayJS from 'react-dayjs';

export default class AdsGalleryComponent extends Component {
  constructor() {
    super()
    this.state = {
      planetickets: []
    };
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/planetickets')
      .then(res => {
        this.setState({ planetickets: res.data })
        console.log(res)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <div className="container-fluid orange-background">
        <div className="row d-flex justify-content-center">
          {this.state.planetickets.map((planeticket, i) =>
            i < 3 &&
            <MDBCol md='4'>
              <MDBCard className="mx-2 my-3" narrow>
                <MDBCardBody>
                  <h5 className='primary-text text-center'>
                    {/* <MDBIcon icon="paw" /> {ad.animal_name} */}
                  </h5>

                  <MDBCardTitle className='font-weight-bold'>
                    <MDBCardText className="text-center my-1">
                      <p><MDBIcon icon="plane-departure" /> {planeticket.departure_city}{' '}<MDBIcon icon="plane-arrival" /> {planeticket.arrival_city}</p>
                      {/* Autre design departure -> arrival with icon or plane or arrow */}
                      Départ le : {' '}
                      <DayJS format="DD-MM-YYYY">
                        {planeticket.date}
                      </DayJS>
                    </MDBCardText>
                  </MDBCardTitle>
                  <p className="text-center">
                    <Link className="btn primary" to={`/planetickets/${planeticket.id}`}>Ce vol m'intéresse</Link>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )}
        </div>
        <p className="text-right">
          <Link to="/all-flights" className="white-text text-right"><strong>Voir plus <MDBIcon icon="angle-double-right" /></strong></Link>
        </p>
      </div>
    )
  }
}
