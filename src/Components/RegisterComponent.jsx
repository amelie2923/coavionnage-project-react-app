import React, { Component } from 'react'
import '../Components/RegisterComponent.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { MDBContainer, MDBIcon, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

export default class RegisterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      redirect: false,
    };
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ redirect: true })
    };
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleConfirmPasswordChange = event => {
    this.setState({ password_confirmation: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('inscription');

    let bodyFormData = new FormData();
    bodyFormData.set('name', this.state.name);
    bodyFormData.set('email', this.state.email);
    bodyFormData.set('password', this.state.password);
    bodyFormData.set('password_confirmation', this.state.password);

    axios.post('http://127.0.0.1:8000/api/register', bodyFormData)
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        this.setState({ redirect: true })
      })
      .catch(error => {
        console.log(error.response)
      })
  };

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/" />)
    };
    return (
      <MDBContainer>
        <MDBRow style={{ height: '100%', width: '100%', paddingTop: '5rem' }}
          className='d-flex justify-content-center align-items-center'>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 blue-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    Inscription
                </h3>
                </MDBRow>
              </div>
              <MDBCardBody>
                <form method="POST" onSubmit={this.handleSubmit}>
                  <div className="grey-text">
                    <MDBInput
                      label="Votre nom"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.handleNameChange}
                    />
                    <MDBInput
                      label="Votre email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.handleEmailChange}
                    />
                    <MDBInput
                      label="Votre mot de passe"
                      icon="lock"
                      group
                      type="password"
                      validate
                      onChange={this.handlePasswordChange}
                    />
                    <MDBInput
                      label="Confirmer votre mot de passe"
                      icon="exclamation-triangle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.handleConfirmPasswordChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    {/* <MDBBtn color="light-blue" type="submit">
                      S'inscrire
                    </MDBBtn> */}
                    <MDBBtn
                      type="button"
                      gradient="blue"
                      className="btn-block z-depth-1a"
                    >
                      S'inscrire
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                ou s'inscrire avec :
                  </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}
