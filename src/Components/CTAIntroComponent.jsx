import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation
} from 'mdbreact';
import '../Components/CTAIntroComponent.css';
import NavbarComponent from './NavbarComponent';

class CTAIntroComponent extends React.Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <div id='apppage' className='bg' style={{ backgroundImage: "url(/images/efe-yagiz-soysal-DGyVvAJNyPE-unsplash.jpg)" }}>
          <MDBView>
            <MDBContainer
              style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
              className='d-flex justify-content-center white-text align-items-center'
            >
              <MDBRow>
                <MDBCol md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                  <MDBAnimation type='fadeInLeft' delay='.3s'>
                    <h1 className='h1-responsive primary-text font-weight-bold mt-sm-5'>
                      Aidez un animal grâce à votre billet d'avion
                  </h1>
                    <hr className='primary' />
                    <h6 className='mb-4'>
                      Chiens et chats à adopter cherchent accompagnant pour la Métropole !
                  </h6>
                    <p><Link className="btn primary" to={''}><MDBIcon icon='search' className='mr-2' /> Association : Rechercher un vol</Link>
                      <Link className="btn primary" to={''}><MDBIcon icon='user' /> Voyageur : Proposer votre vol</Link></p>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md='6' xl='5' className='mt-xl-5'>
                  {/* <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/Mockups/Transparent/Small/admin-new.png'
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation> */}
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBView>
          <MDBContainer>
            <MDBRow className='py-5'>
              <MDBCol md='12' className='text-center'>
                <p>
                  {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default CTAIntroComponent;