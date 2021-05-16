import React from 'react';
import '../Pages/DashboardPage.css';
import TopNavigationComponent from '../Components/TopNavigationComponent';
import SideBarComponent from '../Components/SideBarComponent';
import TableTravellerComponent from '../Components/TableTravellerComponent';
import NotificationsCardComponent from '../Components/NotificationsCardComponent';

const TravellerDashboardPage = () => {
  return (
    <div className="flexible-content">
      <TopNavigationComponent />
      <SideBarComponent />
      <main id="content" className="p-5">
        <h2>Mes annonces</h2>
        {/* <TableAssoComponent /> */}
        <TableTravellerComponent />
        <NotificationsCardComponent />
        {/* <AdsGalleryComponent /> */}
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

export default TravellerDashboardPage;