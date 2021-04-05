import React, { Component } from 'react'
import axios from 'axios';

export default class GetProfileComponent extends Component {
  constructor() {
    super()

    this.state = {
      user: {},
      errors: [],
    };
  };

  componentDidMount() {
    if (localStorage.getItem('token')) {
      let id = this.props.match.params.id
      console.log(id)
      let headers = {
        headers: {
          'API-TOKEN': localStorage.getItem('token')
        }
      }

      axios.get(`http://127.0.0.1:8000/api/users/profile`)
        .then(res => {
          // this.setState({ ad: res.data })
          this.setState({ user: res.data }, () => {
            console.log(res.data)
          })
        })
        .catch(error => {
          console.log(error.response)
        })
    } else {
      this.setState({ redirect: true })
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}