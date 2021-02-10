import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import PublicHomePage from '../Pages/PublicHomePage';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';
import AssociationDashboardPage from '../Pages/AssociationDashboardPage';


export class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={PublicHomePage} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/asso-dashboard" component={AssociationDashboardPage} />
      </Switch>
    )
  }
}