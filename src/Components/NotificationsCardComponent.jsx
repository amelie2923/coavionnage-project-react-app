import React, { Component } from 'react';
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBRow, MDBDataTable, MDBTable, MDBTableHead, MDBTableBody, MDBBtnGroup, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
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
      axios.get('https://api.animal-airline.com/public/api/notifications', headers)
        .then(res => {
          this.setState({ notifications: res.data })
        }).catch(error => {
          console.log(error);
        });
      // const parseresults = JSON.parse(res.data[1].data);
      // console.log(parseresults.user_name)
    }
  }

  handleDeleteNotif = (id, event) => {
    axios.delete(`https://api.animal-airline.com/public/api/notifications/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

        const notifications = this.state.notifications.filter(item => item.id !== id);
        this.setState({ notifications });
      })
  }

  render() {
    console.log(this.state.notifications)
    return (
      <div>
        <MDBRow className="mb-4">
          <MDBCol md="12" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <MDBTable hover>
                  <MDBTableHead color="orange lighten-4">
                    <tr>
                      <th>Notification</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {this.state.notifications && this.state.notifications.length && this.state.notifications.map((notification) =>
                      <tr key={notification.id}>
                        <td><p className="p-3">L'utilisateur n°{JSON.parse(notification.data).user_id} a mis votre annonce {JSON.parse(notification.data).ad_id} dans ses favoris</p></td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Link className="p-3 col-example text-left" onClick={(event) => this.handleDeleteNotif(notification.id, event)}><MDBIcon icon="check" /></Link>
                          </div>
                        </td>
                      </tr>
                    )}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}
