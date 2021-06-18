import React from 'react';
import NotificationsCardComponent from '../Components/NotificationsCardComponent';
import SideBarComponent from '../Components/SideBarComponent';
import TopNavigationComponent from '../Components/TopNavigationComponent'
import { MDBView, MDBContainer } from "mdbreact";
import '../Pages/NotificationsPage.css';


export default function LoginPage() {
  return (
    <div className="flexible-content">
      <MDBView>
        <SideBarComponent />
        <TopNavigationComponent />
        <main id="content" className="p-5">
          <NotificationsCardComponent />
        </main>
      </MDBView>
    </div>
  )
}