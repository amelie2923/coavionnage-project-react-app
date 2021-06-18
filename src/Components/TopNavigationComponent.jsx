import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';
import axios from 'axios';

class TopNavigationComponent extends Component {
  state = {
    user: {},
    collapse: false
  };

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

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    console.log(this.state.user)
    return (
      <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
        <MDBNavbarBrand href="/">
          <strong>Tableau de bord</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar>
          {/* <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="#">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/" target="_blank">About MDB</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer" className="nav-link Ripple-parent" href="https://mdbootstrap.com/docs/react/getting-started/download/" target="_blank">Free download</a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a rel="noopener noreferrer"  className="nav-link Ripple-parent" href="https://mdbootstrap.com/bootstrap-tutorial/" target="_blank">Free tutorials</a>
                        </MDBNavItem>
                    </MDBNavbarNav> */}
          <MDBNavbarNav right>
            {/* <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://pl-pl.facebook.com/mdbootstrap/"><MDBIcon fab icon="facebook" /></a>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/mdbootstrap"><MDBIcon fab icon="twitter" /></a>
                        </MDBNavItem> */}
            <MDBNavItem>
              <a className="border border-light mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="/">
                <MDBIcon icon="home" className="mr-2" />Retour à l'accueil</a>
            </MDBNavItem>
            {this.state.user.role_id === 1 ?
              <MDBNavItem>
                <a className="border border-light mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="/ads/new">
                  <MDBIcon icon="paw" className="mr-2" />Créer une annonce</a>
              </MDBNavItem>
              :
              <MDBNavItem>
                <a className="border border-light mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="/planetickets/new">
                  <MDBIcon icon="plane" className="mr-2" />Poster un billet d'avion</a>
              </MDBNavItem>
            }
            <MDBNavItem className="sidebar-items-toggle">
              {this.state.user.role_id === 1 ?
                <a className="border border-light mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="/association-dashboard">
                  Tableau de bord
                </a>
                :
                <a className="border border-light mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="/traveller-dashboard">
                  Tableau de bord
                </a>
              }
            </MDBNavItem>
            <MDBNavItem className="sidebar-items-toggle">
              <a className="border border-light mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="/profile">Compte</a>
            </MDBNavItem>
            <MDBNavItem className="sidebar-items-toggle">
              <a className="border border-light mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="/notifications">Notifications</a>
            </MDBNavItem>
            <MDBNavItem className="sidebar-items-toggle">
              <a className="border border-light mr-1 nav-link Ripple-parent" rel="noopener noreferrer" href="/favorites">Favoris</a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default TopNavigationComponent;