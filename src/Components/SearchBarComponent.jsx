// search by : date
// aeroport de depart
// aeroport d'arrivee

import React, { Component } from 'react';
import SearchDateFormComponent from '../Components/SearchDateFormComponent';

export default class SearchBarComponent extends Component {
  render() {
    return (
      <div>
        <SearchDateFormComponent />
      </div>
    )
  }
}
