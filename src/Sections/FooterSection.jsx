import React from "react";
import { MDBIcon } from "mdbreact";
import './FooterSection.css';

const FooterSection = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>La plateforme</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Accueil</a></li>
              <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Trouver un vol</a></li>
              <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Proposer un vol</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Inscription/Connexion</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>S'inscrire en tant qu'association</a></li>
              <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>S'inscrire en tant que voyageur</a></li>
              <li><a href="https://www.fiverr.com/share/qb8D02"><i className="fa fa-angle-double-right"></i>Se connecter</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Nos réseaux sociaux</h5>
            <ul className="list-unstyled quick-links">
              <li><a href="https://www.fiverr.com/share/qb8D02"><MDBIcon fab icon="facebook-f" /> Facebook</a></li>
              <li><a href="https://www.fiverr.com/share/qb8D02"><MDBIcon fab icon="facebook-messenger" /> Messenger</a></li>
              <li><a href="https://www.fiverr.com/share/qb8D02"><MDBIcon fab icon="instagram" /> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item"><a href="https://www.fiverr.com/share/qb8D02" target="_blank">Nous contacter par email <br></br><i className="fa fa-envelope"></i></a></li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p><u><a href="https://www.nationaltransaction.com/">Animal Airline</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
            <p className="h6">© Tous droits réservés.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Animal Airline</a></p>
          </div>
          <hr />
        </div>
      </div>
    </section >
  );
}

export default FooterSection;