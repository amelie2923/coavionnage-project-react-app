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

  // componentDidMount() {
  //   if (localStorage.getItem('token')) {
  //     let id = this.props.match.params.id
  //     let headers = {
  //       headers: {
  //         'API-TOKEN': localStorage.getItem('token')
  //       }
  //     }

  //     axios.get(`http://127.0.0.1:8000/api/users/${id}`, headers)
  //       .then(res => {
  //         this.setState({ user: res.data }, () => {
  //           console.log(res.data)
  //         })
  //       })
  //       .catch(error => {
  //         console.log(error.response)
  //       })
  //   } else {
  //   }
  // }

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
    console.log(this.state)
    return (
      <MDBNavbar color="deep-orange lighten-1" dark expand="md">
        <MDBNavbarBrand>
          <Link to={'/'}><strong className="white-text">Coavionnage</strong></Link>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          {/* <MDBNavbarNav right>

          </MDBNavbarNav> */}
          <MDBNavbarNav right>
            <MDBNavItem active>
              <MDBNavLink to="#!">Rechercher</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Proposer un trajet</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  {
                    localStorage.getItem('token')
                      ?
                      <>
                        {/* Récupérer le rôle de l'utilisateur connecté : si 1 -> asso-dashboard et si 2 user-dashboard*/}
                        {/* <MDBDropdownItem><Link to="/login">Tableau de bord</Link></MDBDropdownItem> */}
                        {this.state.user.name}
                        <MDBDropdownItem onClick={() => this.handleLogout()}>Déconnexion</MDBDropdownItem>
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

