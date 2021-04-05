import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutSection = () => {
  return (
    <MDBContainer className="mt-5 mb-5">
      <MDBRow>
        <MDBCol md="4">
          <p><strong>Solidaire</strong></p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis accumsan consequat. Vivamus hendrerit, lectus vel suscipit elementum, ipsum turpis dictum tellus, id varius orci odio at nunc. Phasellus molestie sem nec nunc laoreet vulputate.
        </MDBCol>
        <MDBCol md="4">
          <p><strong>Facile</strong></p>
          Quisque purus dolor, pharetra sed sem pharetra, consectetur viverra metus. Nulla facilisi. Etiam dapibus risus quis consequat placerat. Fusce hendrerit, augue a dictum mattis, mi magna fringilla nunc, id sagittis arcu diam cursus massa.
        </MDBCol>
        <MDBCol md="4">
          <p><strong>Gratuit</strong></p>
          Donec a lorem nisl. Pellentesque pharetra ac sem eget pulvinar. Integer varius porttitor ipsum ac iaculis. Proin aliquam tellus ac sapien facilisis, at maximus quam ullamcorper. Nunc laoreet lorem eget nibh gravida cursus.
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default AboutSection;