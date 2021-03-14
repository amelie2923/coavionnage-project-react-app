import React from 'react';
// import { MDBRow } from 'mdbreact';
import '../Pages/AssociationDashboardPage.css';
import TopNavigationComponent from '../Components/TopNavigationComponent';
import SideBarComponent from '../Components/SideBarComponent';
import AdsGalleryComponent from '../Components/AdsGalleryComponent';

const AssociationDashboardPage = () => {
  return (
    <div className="flexible-content">
      <TopNavigationComponent />
      <SideBarComponent />
      <main id="content" className="p-5">
        <AdsGalleryComponent />
      </main>
      {/* <AdminCardSection1 />
      <ChartSection1 />
      <TableSection />
      <ChartSection2 />
      <MDBRow className="mb-4">
          <MapSection />
          <ModalSection />
      </MDBRow>
      <AdminCardSection2 /> */}
    </div>
  )
}

export default AssociationDashboardPage;