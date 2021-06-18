import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutSection = () => {
  return (
    <MDBContainer className="mt-5 mb-5">
      <MDBRow>
        <MDBCol md="4">
          <p><strong>Solidaire</strong></p>
           L’Ile de la Réunion, c’est malheureusement de nombreux chiens et chats maltraités ou abandonnés errant en meutes dans les rues des différentes villes. Peu d’adoptions sont effectuées sur place, alors que la demande est plus importante sur le continent.
        </MDBCol>
        <MDBCol md="4">
          <p><strong>Facile</strong></p>
          Le voyageur ne s’occupe de rien ! Un responsable achemine le chien ou le chat jusqu’à l’aéroport et gère l’enregistrement auprès de la compagnie du voyageur. Les compagnies aériennes implantées localement enregistrent régulièrement des animaux rapatriés, certaines proposant des tarifs réduits aux associations.
        </MDBCol>
        <MDBCol md="4">
          <p><strong>Gratuit</strong></p>
          Faire voyager un chien ou un chat vers la Métropole ne coûtera rien pour le voyageur, leur enregistrement au départ étant pris entièrement en charge par l’association qui en est responsable. Le voyage du chien ou du chat se fait dans des conditions conformes au voyage avec des papiers en règle et une cage appropriée pour l’animal.
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AboutSection;