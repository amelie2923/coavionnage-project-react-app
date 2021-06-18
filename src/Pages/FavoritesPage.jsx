import React from 'react';
import FavoritesComponent from '../Components/FavoritesComponent';
import SideBarComponent from '../Components/SideBarComponent';
import TopNavigationComponent from '../Components/TopNavigationComponent'
import { MDBView, MDBContainer } from "mdbreact";
import '../Pages/NotificationsPage.css';


export default function FavoritesPage() {
  return (
    <div className="flexible-content">
      <SideBarComponent />
      <TopNavigationComponent />
      <main id="content" className="p-5">
        <MDBView>
          <FavoritesComponent />
        </MDBView>
      </main>
    </div>
  )
}