import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const baseURL = process.env.REACT_APP_BASEURL

export default class LoginRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      new_user: false,
      errorMessage: false
    }
  }
  signup = (event) => {
    this.setState({errorMessage: false})
    event.preventDefault();
    axios({
      method: 'post',
      url: `${baseURL}register`,
      data: {
        username: event.target.Username.value,
        email: event.target.Email.value,
        password: event.target.Password.value,
        verifyNewUser: event.target.Verification.value
      }
    })
      .then((response) => {
          Cookies.set('token  ', response.data.access_token, { expires: 1 });
          Cookies.set('username', response.data.username, { expires: 1 });
          this.props.login(response.data.access_token, response.data.username)
        }).catch((response) => {

          console.log('RES\n', response)
        })
  }
  login = (event) => {
    this.setState({errorMessage: false})
    event.preventDefault();
    axios({
      method: 'post',
      url: `${baseURL}login`,
      data: {
        email: event.target.Email.value,
        password: event.target.Password.value

      }
    })
      .then((response) => {
        Cookies.set('token', response.data.access_token, { expires: 1 });
        Cookies.set('username', response.data.username, { expires: 1 });
        this.props.login(response.data.access_token, response.data.username)
      })
  }
  loginSignup = () => {
    this.setState({ new_user: !this.state.new_user })
  }
  componentWillMount() {
    if (Cookies.get('token')) {
      this.props.hasCookie(Cookies.get('token'), Cookies.get('username'))
    }
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
          <h1 className="login-signup-title">Welcome!</h1>
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
                <input type="hidden" value="disable-autofill" />
                <label className="form-label">Username</label>
                <input className="login-text" type="username" autoComplete="user" placeholder="Username" name="Username" required />
                <label className="form-label">Email</label>
                <input className="login-text" type="email" placeholder="Email" autoComplete="email" name="Email" required />
                <label className="form-label">Password</label>
                <input className="login-text" type="password" placeholder="Password" autoComplete="new-password" name="Password" required />
                <label className="form-label">Referal Code</label>
                <input className="login-text" type="text" autoComplete="referal" placeholder="Referal Code" name="Verification" required />
                <input className="login-submit" type="submit" value="Submit" />
              </form>
            </div>
            <h1>
              {this.state.errorMessage && this.state.errorMessage}
            </h1>
          </div>
        </div>}
      </div>
    )
  }
}
