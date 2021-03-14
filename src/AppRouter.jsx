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

export class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PublicHomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/asso-dashboard" component={AssociationDashboardPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route path="/ads/new" component={PostAdComponent} />
        <Route path="/planetickets/new" component={PurposeFlightFormComponent} />
      </Switch>
    )
  }
}