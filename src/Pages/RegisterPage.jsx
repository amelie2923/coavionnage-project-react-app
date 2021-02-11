import React from 'react'
import RegisterComponent from '../Components/RegisterComponent'
import { MDBView } from "mdbreact";
import '../Pages/RegisterPage.css';

export default function RegisterPage() {
  return (
    <div id="register-page">
      <MDBView>
        <RegisterComponent />
      </MDBView>
    </div>
  )
}
