import React from 'react';
import '../Pages/AssociationDashboardPage.css';
import TopNavigationComponent from '../Components/TopNavigationComponent';
import SideBarComponent from '../Components/SideBarComponent';
import GetProfileComponent from '../Components/GetProfileComponent';

const ProfilePage = () => {
  return (
    <div className="flexible-content">
      <TopNavigationComponent />
      <SideBarComponent />
      <main id="content" className="p-5">
        <h2>Votre profil</h2>
        <GetProfileComponent />
      </main>
    </div>
  )
}

export default ProfilePage;