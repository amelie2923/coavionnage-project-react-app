import React, { Component } from 'react';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  Link,
} from "react-router-dom";

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      redirect: false,
      isOpen: false,
    }
  };

  componentDidMount() {
    let headers = {
      headers: {
        'API-TOKEN': localStorage.getItem('token')
      }
    }
    axios.get(`http://127.0.0.1:8000/api/users/profile`, headers)
      .then(res => {
        this.setState({ user: res.data })
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  handleLogout = () => {
    let token = localStorage.getItem('token');
    axios.post("http://127.0.0.1:8000/api/logout", [], { headers: { 'Authorization': 'API-TOKEN ' + token } }).then(res => {
      localStorage.setItem('token', '');
      localStorage.clear();
      this.setState({ redirect: true })
      console.log(res.data)
    });
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/" />)
    }
    console.log(this.state.user)
    return (
      <MDBNavbar color="deep-orange lighten-1" dark expand="md">
        <MDBNavbarBrand>
          <Link to={'/'}><strong className="white-text">Animal Airline</strong></Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          {/* <MDBNavbarNav right>

          </MDBNavbarNav> */}
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="#!">Vols disponibles</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/all-ads">Animaux à coavionner</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBNavLink to="#!">Proposer un trajet</MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className={"mr-3 ml-3"} />
                  {localStorage.getItem('token') ?
                    <>
                      Bonjour {this.state.user.name}
                    </>
                    :
                    null
                  }
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  {
                    localStorage.getItem('token')
                      ?
                      <>
                        {this.state.user.role_id === 1 ?
                          <>
                            <MDBDropdownItem className="text-center"><Link to="/association-dashboard">Tableau de bord</Link></MDBDropdownItem>
                            <MDBDropdownItem className="text-center"><Link to="/association-dashboard">Créer une annonce</Link></MDBDropdownItem>
                          </>
                          :
                          <>
                            <MDBDropdownItem className="text-center"><Link to="/traveller-dashboard">Tableau de bord</Link></MDBDropdownItem>
                            <MDBDropdownItem className="text-center"><Link to="/traveller-dashboard">Ajouter un billet d'avion</Link></MDBDropdownItem>
                          </>
                        }
                        <MDBDropdownItem className="text-center" onClick={() => this.handleLogout()}>Déconnexion</MDBDropdownItem>
                      </>
                      :
                      <>
                        <MDBDropdownItem><Link to="/login">Connexion</Link></MDBDropdownItem>
                        <MDBDropdownItem><Link to="/register">Inscription</Link></MDBDropdownItem>
                      </>

                  }
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar >
    )
  }
}

