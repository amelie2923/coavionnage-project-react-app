import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../Components/RegisterComponent.css';
import NavbarComponent from './NavbarComponent';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class RegisterComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      redirect: false,
    }
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      this.setState({ redirect: true })
    }
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value }, () => {
      console.log(this.state);
    });
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

  handleConfirmPasswordChange = event => {
    this.setState({ password_confirmation: event.target.value }, () => {
      console.log(this.state);
    });
  }

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
  }

  render() {
    if (this.state.redirect) {
      return (<Redirect to="/" />)
    }
    return (
      <>
        <NavbarComponent />
        <Container className="main-container">
          <h2 className="text-center">Inscription</h2>
          <Form className="register-form" method="POST" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control placeholder="Entrer votre nom" onChange={this.handleNameChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrer votre mail" onChange={this.handleEmailChange} />
              <Form.Text className="text-muted">
                {/* We'll never share your email with anyone else. */}
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Mot de passe" onChange={this.handlePasswordChange} />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirmation du mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Confirmer votre mot de passe" onChange={this.handleConfirmPasswordChange} />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Se souvenir de moi" />
            </Form.Group> */}
            <Button variant="primary" type="submit">
              M'inscrire
              </Button>
          </Form>
        </Container >
      </>
    )
  }
}
