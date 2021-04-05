import React from 'react'
import RegisterUserComponent from '../Components/RegisterUserComponent'
import { MDBView } from "mdbreact";
import '../Pages/RegisterPage.css';

export default function RegisterPage() {
  return (
    <div id="register-page">
      <MDBView>
        <RegisterUserComponent />
      </MDBView>
    </div>
  )
}
