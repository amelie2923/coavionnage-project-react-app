import React, { Component } from 'react'
import '../Components/RegisterComponent.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { MDBContainer, MDBIcon, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter } from 'mdbreact';

export default class RegisterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      redirect: false,
      errors: []
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
    this.setState({ confirm_password: event.target.value }, () => {
      console.log(this.state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    let bodyFormData = new FormData();
    bodyFormData.set('name', this.state.name);
    bodyFormData.set('email', this.state.email);
    bodyFormData.set('password', this.state.password);
    bodyFormData.set('confirm_password', this.state.confirm_password);

    axios.post('https://api.animal-airline.com/public/api/register', bodyFormData)
      .then(res => {
        console.log(res.data)
        // localStorage.setItem('token', res.data.token);
        localStorage.setItem('token', res.data.api_token)
        this.setState({ redirect: true })
      })
      .catch(error => {
        if (error.response.status === 401) {
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
        <MDBRow style={{ height: '100%', width: '100%', marginTop: '5rem', marginLeft: 'auto', marginRight: 'auto', }}
          className='d-flex justify-content-center align-items-center'>
          <MDBCol md="8">
            <MDBCard>
              <div className="header pt-3 peach-gradient">
                <MDBRow className="d-flex justify-content-center">
                  <h3 className="white-text mb-3 pt-3 font-weight-bold">
                    Inscription
                </h3>
                </MDBRow>
              </div>
              <MDBCardBody>
                <form method="POST" onSubmit={this.handleSubmit}>
                  <div className="grey-text">
                    <div class="form-group">
                      <label for="name_input">Nom</label>
                      <input onChange={this.handleNameChange} type="text" class={`form-control ${this.state.errors && this.state.errors.name ? "is-invalid" : ''}`} id="name_input" aria-describedby="emailHelp" />
                      {this.state.errors && this.state.errors.name ? <div class="text-danger invalide-feedback">{this.state.errors['name']}</div> : ''}
                    </div>
                    <div class="form-group">
                      <label for="email_input">Adresse email</label>
                      <input onChange={this.handleEmailChange} type="email" class={`form-control ${this.state.errors && this.state.errors.email ? "is-invalid" : ''}`} id="email_input" aria-describedby="emailHelp" />
                      {this.state.errors && this.state.errors.email ? <div class="text-danger invalid-feedback">{this.state.errors['email']}</div> : ''}
                    </div>
                    <div class="form-group">
                      <label for="password_input">Mot de passe</label>
                      <input onChange={this.handlePasswordChange} type="password" class={`form-control ${this.state.errors && this.state.errors.password ? "is-invalid" : ''}`} id="password_input" />
                      {this.state.errors && this.state.errors.password ? <div class="text-danger invalid-feedback">{this.state.errors['password']}</div> : ''}
                    </div>
                    <div class="form-group">
                      <label for="confirm_password_input">Confirmation du mot de passe</label>
                      <input onChange={this.handleConfirmPasswordChange} type="password" class={`form-control ${this.state.errors && this.state.errors.confirm_password ? "is-invalid" : ''}`} id="confirm_password_input" />
                      {this.state.errors && this.state.errors.confirm_password ? <div class="text-danger invalid-feedback">{this.state.errors['confirm_password']}</div> : ''}
                    </div>
                  </div>
                  <div className="text-center py-4 mt-3">
                    {/* <MDBBtn color="light-blue" type="submit">
                      S'inscrire
                    </MDBBtn> */}
                    <MDBBtn
                      type="submit"
                      gradient="peach"
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
                <a href="https://api.animal-airline.com/public/auth/redirect/google" className="social-icons"><MDBIcon fab icon="facebook" /></a>
                <a href="https://api.animal-airline.com/public/auth/redirect/google" className="social-icons align-middle"><MDBIcon fab icon="google" /></a>
              </div>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Déjà membre ?
                <a href="/login" className="orange-text ml-1">
                    Se connecter
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
