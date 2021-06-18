import React, { Component } from 'react';
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBRow, MDBDataTable, MDBTable, MDBTableHead, MDBTableBody, MDBBtnGroup, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class FavoritesCardComponent extends Component {

  constructor() {
    super()
    this.state = {
      favorites: [],
    };
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      let headers = {
        headers: {
          'API-TOKEN': localStorage.getItem('token')
        }
      }
      axios.get('https://api.animal-airline.com/public/api/favorites', headers)
        .then(res => {
          this.setState({ favorites: res.data })
        }).catch(error => {
          console.log(error);
        });
      // const parseresults = JSON.parse(res.data[1].data);
      // console.log(parseresults.user_name)
    }
  }

  handleDeleteNotif = (id, event) => {
    axios.delete(`https://api.animal-airline.com/public/api/favorites/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

        const favorites = this.state.favorites.filter(item => item.id !== id);
        this.setState({ favorites });
      })
  }

  render() {
    console.log(this.state.favorites)
    return (
      <div>
        <MDBRow className="mb-4">
          <MDBCol md="12" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <MDBTable hover>
                  <MDBTableHead color="orange lighten-4">
                    <tr>
                      <th>Vos favoris</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {this.state.favorites && this.state.favorites.length && this.state.favorites.map((favorite) =>
                      <tr key={favorite.id}>
                        <td>{this.state.favorite.ad_id}</td>
                        <td>
                          <div className="d-flex justify-content-center">
                            <Link className="p-3 col-example text-left" onClick={(event) => this.handleDeleteNotif(favorite.id, event)}><MDBIcon icon="check" /></Link>
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
