import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import * as dayjs from 'dayjs'
// import 'dayjs/locale/fr' // import locale

// dayjs().format()
import DayJS from 'react-dayjs';

export default class AdsGalleryComponent extends Component {
  constructor() {
    super()
    this.state = {
      ads: []
    };
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/ads')
      .then(res => {
        this.setState({ ads: res.data })
        console.log(res)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row d-flex justify-content-center">
          {this.state.ads.map((ad) =>
            <MDBCol md='4'>
              <MDBCard className="mx-2 my-3" narrow>
                <MDBView cascade>
                  <MDBCardImage
                    hover
                    overlay='white-slight'
                    className='card-img-top'
                    src={`http://127.0.0.1:8000/storage/pictures/${ad.image}`}
                    alt='animal image'
                  />
                </MDBView>

                <MDBCardBody>
                  <h5 className='pink-text text-center'>
                    <MDBIcon icon="paw" /> {ad.animal_name}
                  </h5>

                  <MDBCardTitle className='font-weight-bold'>
                    <MDBCardText className="text-center my-1">
                      À partir du: {' '}
                      <DayJS format="DD-MM-YYYY">
                        {ad.date}
                      </DayJS>
                    </MDBCardText>
                  </MDBCardTitle>
                  <p className="text-center">
                    <Link className="btn" to={`/ads/${ad.id}`}>Je l'aide</Link>
                  </p>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          )}
        </div>
      </div>
    )
  }
}
