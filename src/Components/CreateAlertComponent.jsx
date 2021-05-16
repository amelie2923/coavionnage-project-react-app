import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBIcon } from "mdbreact";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import ModalFormComponent from './ModalFormComponent';

export default class CreateAlertComponent extends Component {
  state = {
    modal: false,
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <MDBContainer>
        {/* BUTTON */}
        <MDBBtn color="deep-orange" onClick={this.toggle}><MDBIcon far icon="bell" /> Créer une alerte</MDBBtn>
        {/* MODAL */}
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}    >
          <MDBModalHeader toggle={this.toggle}>Recevoir une alerte : </MDBModalHeader>
          <MDBModalBody>
            <ModalFormComponent />
          </MDBModalBody>
        </MDBModal>
      </MDBContainer >
    );
  }
}
