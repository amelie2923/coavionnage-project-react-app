import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBFormInline,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon
} from 'mdbreact';
import '../Components/CTAIntroComponent.css';

export default class CTAIntroComponent extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  // componentDidMount() {
  //   document.querySelector('nav').style.height = '65px';
  // };

  // componentWillUnmount() {
  //   document.querySelector('nav').style.height = 'auto';
  // };

  render() {
    const { collapsed } = this.state;
    // const navStyle = { marginTop: '4rem' };
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id='calltoaction'>
        <Router>
          <div>
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className='rgba-blue-slight ' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '14rem' }}
            className='d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 text-center'>
                <h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                  Plateforme de mise en relation
                </h1>
                <h5 className='pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5'>
                  {/* Aider les animaux de La Réunion en proposant votre billet d'avion a une association qui s'occuperont du rapatriement ! C'est gratuit et vous n'avez rien à faire ! */}
                </h5>
                <MDBBtn rounded className='btn-light-blue'>
                  <MDBIcon icon='search' className='mr-2' /> Association : Rechercher un vol
                </MDBBtn>
                <MDBBtn outline color='light-blue' rounded>
                  <MDBIcon icon='user' /> Voyageur : Proposer votre vol
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div >
    );
  }
}
