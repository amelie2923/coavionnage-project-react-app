import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';


export default class AdsGalleryComponent extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className="container">
        <div class="row d-flex justify-content-center">
          <MDBCol md='4'>
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay='white-slight'
                  className='card-img-top'
                  src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                  alt='food'
                />
              </MDBView>

              <MDBCardBody>
                <h5 className='pink-text'>
                  <MDBIcon icon="user-circle" /> Nom de l'association
                </h5>

                <MDBCardTitle className='font-weight-bold'>
                  Cheat day inspirations
                </MDBCardTitle>

                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </MDBCardText>

                <MDBBtn color='light-blue'>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay='white-slight'
                  className='card-img-top'
                  src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                  alt='food'
                />
              </MDBView>

              <MDBCardBody>
                <h5 className='pink-text'>
                  <MDBIcon icon="user-circle" /> Nom de l'association
                </h5>

                <MDBCardTitle className='font-weight-bold'>
                  Cheat day inspirations
                </MDBCardTitle>

                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </MDBCardText>

                <MDBBtn color='light-blue'>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay='white-slight'
                  className='card-img-top'
                  src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                  alt='food'
                />
              </MDBView>

              <MDBCardBody>
                <h5 className='pink-text'>
                  <MDBIcon icon="user-circle" /> Nom de l'association
                </h5>

                <MDBCardTitle className='font-weight-bold'>
                  Cheat day inspirations
                </MDBCardTitle>

                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </MDBCardText>

                <MDBBtn color='light-blue'>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay='white-slight'
                  className='card-img-top'
                  src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                  alt='food'
                />
              </MDBView>

              <MDBCardBody>
                <h5 className='pink-text'>
                  <MDBIcon icon="user-circle" /> Nom de l'association
                </h5>

                <MDBCardTitle className='font-weight-bold'>
                  Cheat day inspirations
                </MDBCardTitle>

                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </MDBCardText>

                <MDBBtn color='light-blue'>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay='white-slight'
                  className='card-img-top'
                  src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                  alt='food'
                />
              </MDBView>

              <MDBCardBody>
                <h5 className='pink-text'>
                  <MDBIcon icon="user-circle" /> Nom de l'association
                </h5>

                <MDBCardTitle className='font-weight-bold'>
                  Cheat day inspirations
                </MDBCardTitle>

                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </MDBCardText>

                <MDBBtn color='light-blue'>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCard narrow>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay='white-slight'
                  className='card-img-top'
                  src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
                  alt='food'
                />
              </MDBView>

              <MDBCardBody>
                <h5 className='pink-text'>
                  <MDBIcon icon="user-circle" /> Nom de l'association
                </h5>

                <MDBCardTitle className='font-weight-bold'>
                  Cheat day inspirations
                </MDBCardTitle>

                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </MDBCardText>

                <MDBBtn color='light-blue'>Button</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
      </div>
    )
  }
}
