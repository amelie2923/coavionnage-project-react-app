import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { MDBContainer, MDBIcon, MDBRow, MDBCol, MDBInput, MDBBtn, MDBLink, MDBCard, MDBCardBody } from 'mdbreact';


export default class ForgotPasswordFormComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      redirect: false,
    }
  }

  handleEmail = event => {
    this.setState({ email: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleForgotPassword = event => {
    console.log('ok')
    event.preventDefault();

    let bodyFormData = new FormData();
    bodyFormData.set('email', this.state.email);

    axios.post('http://127.0.0.1:8000/api/password/forgot-password', bodyFormData)
      .then(res => {
        console.log(res.data)
        this.setState({ redirect: true })
      })
      .catch(error => {
        if (error.response.status === 422) {
          this.setState({ errors: error.response.data.errors }, () => {
            console.log(this.state)
          })
        }
      })
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/" />)
    }
    return (
      <div>
        <MDBContainer>
          <MDBRow style={{ height: '100%', width: '100%', paddingTop: '14rem' }}
            className='d-flex justify-content-center align-items-center'>
            <MDBCol md="6">
              <MDBCard>
                <div className="header pt-3 blue-gradient">
                  <MDBRow className="d-flex justify-content-center">
                    <h3 className="white-text mb-3 pt-3 font-weight-bold">
                      Mot de passe oublié
                      </h3>
                  </MDBRow>
                </div>
                <MDBCardBody>
                  <form method="POST" onSubmit={this.handleForgotPassword}>
                    <div className="grey-text">
                      <MDBInput
                        label="Votre email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleEmail}
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="light-blue" type="submit">
                        Réinitialiser
                        </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}