import React, { Component } from 'react';
import { MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdbreact';
import axios from 'axios';
import DayJS from 'react-dayjs';

export default class SearchDateFormComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
    };
  };

  componentDidMount() {
    let headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }

    axios.get(`http://127.0.0.1:8000/api/ads/search/2021-03-26`, headers)
      .then(res => {
        this.setState({ date: res.data })
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  handleDateChange = event => {
    this.setState({
      date: event.target.value
    });
  };

  render() {
    console.log(this.state.date);
    // body form ? to get date
    return (
      <div className="container my-5">
        <div className="row">
          <MDBCol md='6'>
            <MDBCard>
              <MDBCardBody>
                <input type="date" id="start" name="trip-start"
                  min="2021-01-01" onChange={this.handleDateChange} />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </div>
    )
  }
}
