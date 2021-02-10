import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {
  Link,
  Redirect
} from "react-router-dom";

export default class NavbarComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false,
    }
  }

  handleLogout = () => {
    const token = localStorage.getItem('token');
    axios.post("http://127.0.0.1:8000/api/logout", [], { headers: { 'Authorization': 'Bearer ' + token } }).then(res => {
      localStorage.setItem('token', '');
      localStorage.clear();
      this.setState({ redirect: true })
      console.log(res.data)
    })
  }

  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Coavionnage</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              {
                localStorage.getItem('token')
                  ?
                  <>
                    <Link className="nav-link" to="/login">Poster une annonce</Link>
                    <Button className="btn" onClick={() => this.handleLogout()}>Déconnexion</Button>
                  </>
                  :
                  <>
                    <Link className="nav-link" to="/login">Connexion</Link>
                    <Link className="nav-link" to="/register">Inscription</Link>
                  </>
              }
              {/* <Nav.Link href="#link">Link</Nav.Link> */}
              {/* Uniquement si l'utilisateur est connecté */}
              {/* <NavDropdown title="Profil" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Créer une annonce</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mes annonces</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mes alertes</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Mon profil</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}

            {/* Uniquement si l'utilisateur est connecté */}
            {/* <Button variant="danger">Déconnexion</Button> */}
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

