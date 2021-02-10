import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../Components/LoginComponent.css';
import NavbarComponent from './NavbarComponent';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      redirect: false,
      errors: [],
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ redirect: true })
    }
  }

  handleEmailChange = event => {
    this.setState({ email: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value }, () => {
      console.log(this.state);
    });
  }

  handleSubmit = event => {

    event.preventDefault();
    console.log('connexion');

    let bodyFormData = new FormData();
    bodyFormData.set('email', this.state.email);
    bodyFormData.set('password', this.state.password);

    axios.post('http://127.0.0.1:8000/api/login', bodyFormData)
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
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/" />)
    }
    return (
      <>
        <NavbarComponent />
        <Container className="main-container">
          <h2 className="text-center">Connexion</h2>
          <Form className="register-form" method="POST" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrer votre mail" onChange={this.handleEmailChange} />
              {/* <Form.Control.Feedback type="invalid">
                Please choose an email.
              </Form.Control.Feedback> */}
              {this.state.errors && this.state.errors.email ? <div className="invalid-feedback">{this.state.errors.email}</div> : ''}
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" onChange={this.handlePasswordChange} />
              {this.state.errors && this.state.errors.password ? <div className="invalid-feedback">{this.state.errors.password}</div> : ''}
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Se souvenir de moi" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              Me connecter
            </Button>
          </Form>
        </Container >
      </>
    )
  }
}