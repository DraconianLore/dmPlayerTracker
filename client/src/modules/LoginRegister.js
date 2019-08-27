import React, { Component } from 'react';
import axios from 'axios';

export default class LoginRegister extends Component {

  login = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3001/signup',
      data: {
        userDetails: {
          username: 'Fred',
          password: '999',
          email: 'test@test.test'
        }
      }
    })
      .then((response) => {
        console.log(response.data)

        // this.setState({
        //   message: response.data.message
        // });
      })
  }
  render() {

    return (
      <div>
        <h1>login/register</h1>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}