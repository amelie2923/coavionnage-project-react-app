import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import axios from 'axios';

export default class NotificationsCardComponent extends Component {

  constructor() {
    super()
    this.state = {
      notifications: [],
    };
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      let headers = {
        headers: {
          'API-TOKEN': localStorage.getItem('token')
        }
      }
      axios.get('http://127.0.0.1:8000/api/notifications', headers)
        .then(res => {
          this.setState({ notifications: res.data })
        }).catch(error => {
          console.log(error);
        });
      // const parseresults = JSON.parse(res.data[1].data);
      // console.log(parseresults.user_name)
    }
  }

  render() {
    return (
      <div>
        <MDBCol style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Notifications</MDBCardTitle>
              {this.state.notifications && this.state.notifications.length && this.state.notifications.map((notification, i) => {
                return (
                  <MDBCardText>
                    L'utilisateur n°{JSON.parse(notification.data).user_id} a mis votre annonce {JSON.parse(notification.data).ad_id} dans ses favoris
                  </MDBCardText>
                )
              })}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div >
    )
  }
}
