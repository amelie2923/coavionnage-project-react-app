import React from 'react'
import LoginComponent from '../Components/LoginComponent'
import { MDBView } from "mdbreact";
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
