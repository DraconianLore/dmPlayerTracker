import React, { Component } from 'react';
import axios from 'axios';

export default class LoginRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: ''
    }
  }
  signup = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3001/register',
      data: {
        username: 'Fred',
        password: '999',
        email: '1test@test.test'

      }
    })
      .then((response) => {
        console.log(response.data)

        // this.setState({
        //   message: response.data.message
        // });
      })
  }
  login = () => {
    axios({
      method: 'post',
      url: 'http://localhost:3001/login',
      data: {
        email: '1test@test.test',
        password: '999'

      }
    })
      .then((response) => {
        this.setState({ auth: response.data.access_token })
        console.log(response.data)

        // this.setState({
        //   message: response.data.message
        // });
      })
  }
  test = () => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/test',
      headers: {
        Authorization: this.state.auth
      }
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch(function (e) {
        console.log(e.response.data)
      })
  }

  render() {

    return (
      <div>
        <h1>login/register</h1>
        <button onClick={this.signup}>Register</button>
        <button onClick={this.login}>Log in</button>
        <button onClick={this.test}>Test</button>
        <div>
          <h1>Welcome Back</h1>
          <div className="login-row">
            <div className="form-p">
              <form action="#" method="post">
                <label className="form-label">Username</label>
                <input className="login-text" type="text" placeholder="Username" name="Username" required />
                <label className="form-label">Password</label>
                <input className="login-text" type="password" placeholder="Password" name="Password" required />
                <input className="login-submit" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
