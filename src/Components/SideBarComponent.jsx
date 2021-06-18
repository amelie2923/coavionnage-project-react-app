import React, { Component } from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class SideBarComponent extends Component {
  constructor() {
    super()
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    let headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }
    axios.get(`https://api.animal-airline.com/public/api/users/profile`, headers)
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  render() {
    console.log(this.state.user)
    return (
      <div className="sidebar-fixed position-fixed">
        <a href="#!" className="logo-wrapper waves-effect">
          {/* <img alt="MDB React Logo" className="img-fluid" src={logo}/> */}
        </a>
        <MDBListGroup className="list-group-flush">
          {/* add dynamic data from role */}
          {this.state.user.role_id === 1 ?
            <NavLink exact={true} to="/association-dashboard" activeClassName="activeClass">
              <MDBListGroupItem>
                <MDBIcon icon="file-invoice" className="mr-3" />
              Mes annonces
            </MDBListGroupItem>
            </NavLink>
            :
            <NavLink exact={true} to="/traveller-dashboard" activeClassName="activeClass">
              <MDBListGroupItem>
                <MDBIcon icon="file-invoice" className="mr-3" />
              Mes annonces
            </MDBListGroupItem>
            </NavLink>
          }
          <NavLink to="/profile" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="user" className="mr-3" />
              Compte
          </MDBListGroupItem>
          </NavLink>
          <NavLink to="/notifications" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon icon="bell" className="mr-3" />
              Notifications
          </MDBListGroupItem>
          </NavLink>
          <NavLink to="/favorites" activeClassName="activeClass">
            <MDBListGroupItem>
              <MDBIcon far icon="heart" className="mr-3" />
              Favoris
          </MDBListGroupItem>
          </NavLink>
          {/* <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/maps" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Maps
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink> */}
        </MDBListGroup>
      </div>
    );
  }

}
