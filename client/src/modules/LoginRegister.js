import React, { Component } from 'react';
import axios from 'axios';

export default class LoginRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: ''
    }
  }
  signup = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3001/register',
      data: {
        username: event.target.Username.value,
        email: event.target.Email.value,
        password: event.target.Password.value
      }
    })
      .then((response) => {
        console.log(response.data)

        // this.setState({
        //   message: response.data.message
        // });
      })
  }
  login = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3001/login',
      data: {
        email: event.target.Email.value,
        password: event.target.Password.value

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
  loginSignup = () => {
    this.setState({ new_user: !this.state.new_user })
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
        {this.state.new_user || <div>
        <h1 className="login-signup-title">Welcome Back</h1>
          <div className="login-row">
            <div className="login-signup">
              <div className="login-signup-selected-btn">
                <label className="selected-section">
                  Log In
              </label>
              </div>
              <div className="login-signup-unselected-btn" onClick={this.loginSignup}>
                <label className="unselected-section">
                  Register
              </label>
              </div>
            </div>
            <div className="form-p">
              <form onSubmit={this.login}>
                <label className="form-label">Email</label>
                <input className="login-text" type="email" placeholder="Email" autoComplete="email" name="Email" required />
                <label className="form-label">Password</label>
                <input className="login-text" type="password" autoComplete="password" placeholder="Password" name="Password" required />
                <input className="login-submit" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>}
        {this.state.new_user && <div>
        <h1 className="login-signup-title">Welcome to</h1>
        <h1 className="login-signup-title">dmPlayerTracker</h1>
          <div className="register-row">
            <div className="login-signup">
              <div className="login-signup-unselected-btn" onClick={this.loginSignup}>
                <label className="unselected-section">
                  Log In
              </label>
              </div>
              <div className="login-signup-selected-btn">
                <label className="selected-section">
                  Register
              </label>
              </div>
            </div>
            <div className="form-p">
              <form onSubmit={this.signup}>
                <input type="hidden" value="disable-autofill"/>
                <label className="form-label">Username</label>
                <input className="login-text" type="username" autoComplete="user" placeholder="Username" name="Username" required />
                <label className="form-label">Email</label>
                <input className="login-text" type="email" placeholder="Email" autoComplete="email" name="Email" required />
                <label className="form-label">Password</label>
                <input className="login-text" type="password" placeholder="Password" autoComplete="new-password" name="Password" required />
                <input className="login-submit" type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>}

        {/* TESTION SECTION */}
<h1>login/register test buttons</h1>
<button onClick={this.signup}>Register</button>
<button onClick={this.login}>Log in</button>
<button onClick={this.test}>Test</button>
      </div>
    )
  }
}
