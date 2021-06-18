import React from 'react'
import LoginComponent from '../Components/LoginComponent'
import { MDBView, MDBContainer } from "mdbreact";
import '../Pages/LoginPage.css';

export default function LoginPage() {
  return (
    <div id="login-page">
      <MDBView>
        <LoginComponent />
      </MDBView>
    </div>
  )
}
