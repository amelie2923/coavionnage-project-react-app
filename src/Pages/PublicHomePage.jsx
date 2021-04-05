import React, { Component } from 'react'
// import NavbarComponent from '../Components/NavbarComponent';
import CTAIntroComponent from '../Components/CTAIntroComponent';
import AdsGalleryComponent from '../Components/AdsGalleryComponent';
import AboutSection from '../Sections/AboutSection';
import FooterSection from '../Sections/FooterSection';
import { MDBBtn } from 'mdbreact';
import axios from 'axios';

// import PurposeFlightSection from '../Components/PurposeFlightSection';

export default class PublicHomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {

    };
  };

  render() {
    return (
      <>
        <CTAIntroComponent />
        <h1 className="mt-5 mb-5 text-center">Ils recherchent un vol</h1>
        <AdsGalleryComponent />
        <h1 className="mt-5 mb-5 text-center">Comment ça marche ?</h1>
        <AboutSection />
        <FooterSection />
      </>
    )
  }
}
