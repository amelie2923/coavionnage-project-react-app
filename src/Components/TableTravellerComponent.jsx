import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBRow, MDBDataTable, MDBTable, MDBTableHead, MDBTableBody, MDBBtnGroup, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DayJS from 'react-dayjs';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFComponent from './PDFComponent';

export default class TableTravellerComponent extends Component {
  constructor() {
    super()
    this.state = {
      planetickets: [],
    };
  };

  componentDidMount() {
    axios.get('https://api.animal-airline.com/public/api/planetickets')
      .then(res => {
        this.setState({ planetickets: res.data })
        console.log(res)
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  handlePlaneticket = (id, event) => {
    axios.delete(`https://api.animal-airline.com/public/api/planetickets/delete/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

        const planetickets = this.state.planetickets.filter(item => item.id !== id);
        this.setState({ planetickets });
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
                  <MDBTableHead color="orange lighten-4">
                    <tr>
                      <th>Date</th>
                      {/* <th>Départ</th>
                      <th>Arrivée</th> */}
                      <th className="text-center">Actions</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {this.state.planetickets.map((planeticket, i) =>
                      <tr key={i}>
                        <td><p className="p-3"><DayJS format="DD-MM-YYYY">
                          {planeticket.date}
                        </DayJS></p></td>
                        {/* <td>PDF</td> */}
                        <td>
                          <div className="d-flex justify-content-center">
                            <Link className="p-3 col-example text-left" to={`/planetickets/${planeticket.id}`}><MDBIcon icon="search" /></Link>
                            <Link className="p-3 col-example text-left" to={`/planetickets/edit/${planeticket.id}`}><MDBIcon far icon="edit" /></Link>
                            <Link className="p-3 col-example text-left" onClick={(event) => this.handlePlaneticket(planeticket.id, event)}><MDBIcon far icon="trash-alt" /></Link>
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
