import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBView, MDBIcon } from 'mdbreact';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import * as dayjs from 'dayjs'
// import 'dayjs/locale/fr' // import locale
// dayjs().format()
import DayJS from 'react-dayjs';
// import AdsGalleryComponent from './AdsGalleryComponent';

export default class GetAdsComponent extends Component {
  constructor() {
    super()
    this.state = {
      ads: [],
      searchDate: '',
      redirect: false,
      // afterSearchResponse: [],
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

  handleDateChange = event => {
    this.setState({
      searchDate: event.target.value
    });
  };

  fetchAds = () => {
    let headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }

    axios.get('http://127.0.0.1:8000/api/ads?date=' + this.state.searchDate, headers)
      .then(res => {
        this.setState({ ads: res.data })
        console.log(this.state.ads);
        console.log(this.state.searchDate);
        // this.forceUpdate();
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   try {
  //     this.setState({ redirect: true })
  //     console.log(this.state.redirect)
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // }

  // routeChange = () => {
  //   let path = '/login';
  //   // eslint-disable-next-line react-hooks/rules-of-hooks
  //   let history = useHistory();
  //   history.push(path);
  // }

  render() {
    // if (this.state.redirect) {
    //   return (<Redirect to="/login" />)
    // }
    return (
      <div className="container">
        <div className="container my-5">
          <div className="row">
            <MDBCol lg='4' md='4'>
              <MDBCard>
                <MDBCardBody>
                  <input type="date" id="start" name="trip-start"
                    min="2021-01-01" onChange={this.handleDateChange} />
                  <MDBBtn color="deep-orange" size="md" onClick={this.fetchAds}>Chercher</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </div>
        </div>
        {this.fetchAds ?
          <div className="row d-flex justify-content-center">
            {this.state.ads.map((ad, i) =>
              <MDBCol md='4'>
                <MDBCard className="mx-2 my-3" narrow>
                  <MDBView cascade>
                    <MDBCardImage
                      key={i}
                      hover
                      overlay='white-slight'
                      className='card-img-top'
                      src={`http://127.0.0.1:8000/storage/pictures/${ad.image}`}
                      alt='animal image'
                    />
                  </MDBView>

                  <MDBCardBody>
                    <h5 className='primary-text text-center'>
                      <MDBIcon icon="paw" /> {ad.animal_name}
                    </h5>

                    <MDBCardTitle className='font-weight-bold'>
                      <MDBCardText className="text-center my-1">
                        <p><MDBIcon icon="plane-departure" /> {ad.departure_city}{' '}<MDBIcon icon="plane-arrival" /> {ad.arrival_city}</p>
                        {/* Autre design departure -> arrival with icon or plane or arrow */}
                        {/* À partir du: {' '}
                        <DayJS format="DD-MM-YYYY">
                          {ad.date}
                        </DayJS> */}
                      </MDBCardText>
                    </MDBCardTitle>
                    <p className="text-center">
                      <Link className="btn primary" to={`/ads/${ad.id}`}>Je l'aide</Link>
                    </p>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            )}
          </div>
          :
          <>
            <div className="row d-flex justify-content-center">
              {this.state.ads.map((ad, i) =>
                <MDBCol md='4'>
                  <MDBCard className="mx-2 my-3" narrow>
                    <MDBView cascade>
                      <MDBCardImage
                        key={i}
                        hover
                        overlay='white-slight'
                        className='card-img-top'
                        src={`http://127.0.0.1:8000/storage/pictures/${ad.image}`}
                        alt='animal image'
                      />
                    </MDBView>

                    <MDBCardBody>
                      <h5 className='primary-text text-center'>
                        <MDBIcon icon="paw" /> {ad.animal_name}
                      </h5>

                      <MDBCardTitle className='font-weight-bold'>
                        <MDBCardText className="text-center my-1">
                          <p><MDBIcon icon="plane-departure" /> {ad.departure_city}{' '}<MDBIcon icon="plane-arrival" /> {ad.arrival_city}</p>
                          {/* Autre design departure -> arrival with icon or plane or arrow */}
                          {/* À partir du: {' '} */}
                          <DayJS format="DD-MM-YYYY">
                            {ad.date}
                          </DayJS>
                        </MDBCardText>
                      </MDBCardTitle>
                      <p className="text-center">
                        <MDBBtn onClick={this.routeChange}></MDBBtn>
                        <Link className="btn primary" to={`/ads/${ad.id}`}>Je l'aide</Link>
                        {/* {localStorage.getItem('token') ?
                          <Link className="btn primary" to={`/ads/${ad.id}`}>Je l'aide</Link>
                          :
                          <Redirect to='/login' />
                        } */}
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              )}
            </div>
            {/* <h2>Pas d'annonces à cette date</h2> */}
          </>
        }
      </div>
    )
  }
}
