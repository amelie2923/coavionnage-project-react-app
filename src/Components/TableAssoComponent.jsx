import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBRow, MDBTable, MDBTableHead, MDBTableBody, MDBBtnGroup, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DayJS from 'react-dayjs';


export default class TableAssoComponent extends Component {
  constructor() {
    super()
    this.state = {
      ads: [],
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

  // handleDeleteAd = () => {
  //   if (localStorage.getItem('token')) {
  //     let id = this.props.match.params.id
  //     let headers = {
  //       headers: {
  //         'API-TOKEN': localStorage.getItem('token')
  //       }
  //     }

  //     axios.delete(`http://127.0.0.1:8000/api/ads/delete/${id}`, headers)
  //       .then(res => {
  //         // this.setState({ ad: res.data })
  //         this.setState({ ad: res.data }, () => {
  //           this.checkFavorite()
  //         })
  //       })
  //       .catch(error => {
  //         console.log(error.response)
  //       })
  //   } else {
  //     this.setState({ redirect: true })
  //   }
  // }

  handleDeleteAd = (id, event) => {
    // axios.delete('http://127.0.0.1:8000/api/ads/delete/', { params: { 'id': this.state.ad.id } })
    //   //${this.state.ad.id}
    //   .then(res => {
    //     this.setState({ ads: res.data })
    //     console.log(res)
    //   })
    //   .catch(error => {
    //     console.log(error.response)
    //   })
    axios.delete(`http://127.0.0.1:8000/api/ads/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

        const ads = this.state.ads.filter(item => item.id !== id);
        this.setState({ ads });
      })
  }

  render() {
    return (
      <div>
        <MDBRow className="mb-4">
          <MDBCol md="12" className="mb-4">
            <MDBCard>
              <MDBCardBody>
                <MDBTable hover>
                  <MDBTableHead color="blue lighten-4">
                    <tr>
                      <th>Nom</th>
                      <th>Date</th>
                      {/* <th>Départ</th>
                      <th>Arrivée</th> */}
                      <th className="text-center">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {this.state.ads.map((ad, i) =>
                      <tr key={i}>
                        <td><p className="p-3">{ad.animal_name}</p></td>
                        <td><p className="p-3"><DayJS format="DD-MM-YYYY">
                          {ad.date}
                        </DayJS></p></td>
                        {/* <td></td> */}
                        <td>
                          <div className="d-flex justify-content-center">
                            <Link className="p-3 col-example text-left" to={`/ads/${ad.id}`}><MDBIcon icon="search" /></Link>
                            <Link className="p-3 col-example text-left" to={`/ads/edit/${ad.id}`}><MDBIcon far icon="edit" /></Link>
                            <Link className="p-3 col-example text-left" onClick={(event) => this.handleDeleteAd(ad.id, event)}><MDBIcon far icon="trash-alt" /></Link>
                          </div>
                        </td>
                        {/* <td><MDBBtnGroup>
                          <MDBBtn color="info" size="md">Voir</MDBBtn>
                          <MDBBtn color="info" size="md">Modifier</MDBBtn>
                          <MDBBtn color="info" size="md">Supprimer</MDBBtn>
                        </MDBBtnGroup></td> */}
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
