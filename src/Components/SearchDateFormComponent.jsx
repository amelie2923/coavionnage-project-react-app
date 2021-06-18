import React, { Component } from 'react';
import { MDBBtn, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import axios from 'axios';
import DayJS from 'react-dayjs';

export default class SearchDateFormComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      afterSearchResponse: [],
    };
  };

  handleDateChange = event => {
    this.setState({
      date: event.target.value
    });
  };

  fetchAds = () => {
    let headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }

    axios.get('https://api.animal-airline.com/public/api/ads?date=' + this.state.date, headers)
      .then(res => {
        this.setState({ afterSearchResponse: res.data })
        console.log(this.state.afterSearchResponse);

      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    // body form ? to get date
    return (
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
    )
  }
}
