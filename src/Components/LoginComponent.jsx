import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../Components/LoginComponent.css';
import NavbarComponent from './NavbarComponent';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
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
  }

  render() {
    return (
      <>
        <NavbarComponent />
        <Container className="main-container">
          <h2 className="text-center">Connexion</h2>
          <Form className="register-form" method="POST" onSubmit={this.handleSubmit}>
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
