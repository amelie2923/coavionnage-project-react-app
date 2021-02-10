import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBContainer } from "mdbreact";


export default class AssociationDashboardPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <MDBContainer>
        <div className="peach-gradient">
          <p>Hi</p>
        </div>
      </MDBContainer>
    )
  }
}
