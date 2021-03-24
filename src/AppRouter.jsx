import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import PublicHomePage from './Pages/PublicHomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import AssociationDashboardPage from './Pages/AssociationDashboardPage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import PostAdComponent from './Components/PostAdComponent';
import PurposeFlightFormComponent from './Components/PurposeFlightFormComponent';
import AdComponent from './Components/AdComponent';
import EditAdComponent from './Components/EditAdComponent';
import AuthenticationComponent from './Components/AuthenticationComponent';
import NavBarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';

export class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/asso-dashboard" component={AssociationDashboardPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route path="/ads/edit/:id" component={EditAdComponent} />
        <Route path="/ads/new" component={PostAdComponent} />
        <Route path="/login/:provider/:token" component={AuthenticationComponent} />
        <Route path="/planetickets/new" component={PurposeFlightFormComponent} />
        <div>
          <NavBarComponent />
          <Route exact path="/" component={PublicHomePage} />
          <Route path="/ads/:id" component={AdComponent} />
        </div>
        <FooterComponent />
      </Switch>
    )
  }
}