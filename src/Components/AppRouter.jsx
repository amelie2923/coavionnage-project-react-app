import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import HomeComponent from './HomeComponent';
import RegisterComponent from './RegisterComponent';
import LoginComponent from './LoginComponent';


export class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/register" component={RegisterComponent} />
        <Route path="/login" component={LoginComponent} />
      </Switch>

    )
  }
}