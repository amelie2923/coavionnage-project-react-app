import React from 'react'
import RegisterAssoComponent from '../Components/RegisterAssoComponent'
import { MDBView } from "mdbreact";
import '../Pages/RegisterPage.css';

export default function RegisterPage() {
  return (
    <div id="register-page">
      <MDBView>
        <RegisterAssoComponent />
      </MDBView>
    </div>
  )
}
