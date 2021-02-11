import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBInput
} from "mdbreact";
import axios from 'axios';
import {
  Link,
  Redirect
} from "react-router-dom";

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
      isOpen: false,
    }
  }

  handleLogout = () => {
    const token = localStorage.getItem('token');
    axios.post("http://127.0.0.1:8000/api/logout", [], { headers: { 'Authorization': 'Bearer ' + token } }).then(res => {
      localStorage.setItem('token', '');
      localStorage.clear();
      this.setState({ redirect: true })
      console.log(res.data)
    });
  }

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar color="blue-gradient" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Coavionnage</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#!">Rechercher</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Proposer un trajet</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          {/* <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem> */}
          {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          {/* </MDBNavbarNav> */}
          {/* <MDBNavbarNav right> */}
          {/* <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem> */}
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right className="dropdown-default">
                  {
                    localStorage.getItem('token')
                      ?
                      <>
                        <MDBInput onClick={() => this.handleLogout()}>Déconnexion</MDBInput>
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

