import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import NavbarComponent from '../Components/NavbarComponent';

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
      </>
    )
  }
}


