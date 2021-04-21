import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import PublicHomePage from './Pages/PublicHomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import RegisterAssoPage from './Pages/RegisterAssoPage';
import AssociationDashboardPage from './Pages/AssociationDashboardPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import ProfilePage from './Pages/ProfilePage';
import PostAdComponent from './Components/PostAdComponent';
import PostFlightComponent from './Components/PostFlightComponent';
import EditFlightComponent from './Components/EditFlightComponent';
import GetAdComponent from './Components/GetAdComponent';
import EditAdComponent from './Components/EditAdComponent';
import AuthenticationComponent from './Components/AuthenticationComponent';
import GetFlightComponent from './Components/GetFlightComponent';
// import FlightsGalleryComponent from './Components/FlightsGalleryComponent';
// import PDFGeneratePage from './Pages/PDFGeneratePage';


export class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/association-register" component={RegisterAssoPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/asso-dashboard" component={AssociationDashboardPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route path="/ads/edit/:id" component={EditAdComponent} />
        <Route path="/ads/new" component={PostAdComponent} />
        <Route path="/login/:provider/:token" component={AuthenticationComponent} />
        <Route path="/planetickets/new" component={PostFlightComponent} />
        <Route path="/planetickets/edit/:id" component={EditFlightComponent} />
        <Route path="/profile" component={ProfilePage} />
        {/* <Route path="/pdf/generate" component={PDFGeneratePage} /> */}
        <>
          <Route exact path="/" component={PublicHomePage} />
          <Route path="/ads/:id" component={GetAdComponent} />
          <Route path="/planetickets/:id" component={GetFlightComponent} />
        </>
      </Switch>
    )
  }
}