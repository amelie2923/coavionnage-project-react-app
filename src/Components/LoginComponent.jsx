import React, { Component } from 'react'
import '../Components/LoginComponent.css';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { MDBContainer, MDBIcon, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      redirect: false,
      errors: [],
    };
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ redirect: true })
    };
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

  handleSubmit = event => {
    event.preventDefault();
    console.log('connexion');

    let bodyFormData = new FormData();
    bodyFormData.set('email', this.state.email);
    bodyFormData.set('password', this.state.password);

    const headers = {
      'Content-Type': 'application/json',
    }

    axios.post('http://127.0.0.1:8000/api/login', bodyFormData, {
      headers: headers
    })
      .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token);
        this.setState({ redirect: true })
      })
      .catch(error => {
        if (error.response.status === 422) {
          this.setState({ errors: error.response.data.errors }, () => {
            console.log(this.state)
          })
        }
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
                    Connexion
                </h3>
                </MDBRow>
                <MDBRow className="mt-2 mb-3 d-flex justify-content-center">
                  <a href="#!" className="fa-lg p-2 m-2 fb-ic">
                    <MDBIcon fab icon="facebook-f" size="lg" className="white-text" />
                  </a>
                  <a href="http://127.0.0.1:8000/auth/redirect/google" className="fa-lg p-2 m-2 gplus-ic">
                    <MDBIcon fab icon="google" size="lg" className="white-text" />
                  </a>
                </MDBRow>
              </div>
              <MDBCardBody>
                <form method="POST" onSubmit={this.handleSubmit}>
                  <div className="grey-text">
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
                    {/* <MDBLink to='/forgot-password'>
                      Mot de passe oublié ?
                    </MDBLink> */}
                  </div>
                  <div className="text-center py-4 mt-3">
                    {/* <MDBBtn color="light-blue" type="submit">
                      Se connecter
                    </MDBBtn> */}
                    <MDBBtn
                      type="submit"
                      gradient="blue"
                      className="btn-block z-depth-1a"
                    >
                      Se connecter
                    </MDBBtn>
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Link to="/forgot-password">Mot de passe oublié ?</Link>
                  </div>
                </form>
              </MDBCardBody>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                ou se connecter avec :
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
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Pas encore membre ?
                <a href="/register" className="blue-text ml-1">
                    S'inscrire
                </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}