import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import NavbarComponent from '../Components/NavbarComponent';
import CTAIntroComponent from '../Components/CTAIntroComponent';
import AdsGalleryComponent from '../Components/AdsGalleryComponent';
// import PurposeFlightSection from '../Components/PurposeFlightSection';

export default class PublicHomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <>
        <NavbarComponent />
        <CTAIntroComponent />
        <AdsGalleryComponent />
      </>
    )
  }
}


