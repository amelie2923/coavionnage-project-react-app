import React, { Component } from 'react'
import Loader from "react-loader-spinner";

export default class LoaderComponent extends Component {
  render() {
    return (
      <Loader
        type="TailSpin"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3sec
      />
    )
  }
}
