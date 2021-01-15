import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {
  Link
} from "react-router-dom";


export default class NavbarComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
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
              <Link className="nav-link" to="/login">Connexion</Link>
              <Link className="nav-link" to="/register">Inscription</Link>
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

