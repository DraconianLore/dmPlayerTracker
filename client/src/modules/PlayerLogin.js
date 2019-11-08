import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const baseURL = process.env.REACT_APP_BASEURL

export default class PlayerSheet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      new_user: false,
      errorMessage: false,
      serverOnline: false,
    }
  }
  signup = (event) => {
    this.setState({ errorMessage: false })
    event.preventDefault();
    axios({
      method: 'post',
      url: `${baseURL}playersheet/register`,
      data: {
        UID: event.target.UID.value,
        email: event.target.Email.value,
        password: event.target.Password.value,
      }
    })
      .then((response) => {
        Cookies.set('token  ', response.data.access_token, { expires: 1 });
        Cookies.set('username', response.data.UID, { expires: 1 });
        this.props.login(response.data.access_token, response.data.username)
      }).catch((error) => {
        this.setState({ errorMessage: error.response.data.message })
      })
  }
  login = (event) => {
    this.setState({ errorMessage: false })
    event.preventDefault();
    axios({
      method: 'post',
      url: `${baseURL}login`,
      data: {
        email: event.target.Email.value,
        password: event.target.Password.value
      }
    }).then((response) => {
      Cookies.set('token', response.data.access_token, { expires: 1 });
      Cookies.set('username', response.data.UID, { expires: 1 });
      this.props.login(response.data.access_token, response.data.username)
    }).catch((error) => {
      this.setState({ errorMessage: error.response.data.message })
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

  componentDidMount() {
    if (!Cookies.get('token')) {
      axios({
        method: 'get',
        url: `${baseURL}api/connectionStatus`,
      })
        .then((response) => {
          if (response.data.message === 'ONLINE')
            this.setState({
              serverOnline: true
            })
        })
        .catch(function (e) {
          console.log(e)
        })
    }
  }

  render() {
    return (
      <div>
        {this.state.new_user || <div>
          <h1 className="login-signup-title">Player Login</h1>
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
          <br />
          <div className='disclaimer'>
            <p>
              Please note that the initial login may take some time as the</p>
            <p> backend is hosted on heroku and my be powered down.</p>
            <p>Once a connectioni is established an image will appear below
          </p>
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
                <label className="form-label">Character Name</label>
                <input className="login-text" type="char" autoComplete="false" placeholder="Character Name" name="char" required />
                <label className="form-label">Email</label>
                <input className="login-text" type="email" placeholder="Email" autoComplete="email" name="Email" required />
                <label className="form-label">Password</label>
                <input className="login-text" type="password" placeholder="Password" autoComplete="new-password" name="Password" required />
                <label className="form-label">Registration Code</label>
                <input className="login-text" type="UID" autoComplete="false" placeholder="Registration Code" name="UID" required />
                <input className="login-submit" type="submit" value="Submit" />
              </form>
            </div>
            <h1>
            </h1>
          </div>
        </div>}
        {this.state.errorMessage && <h1>{this.state.errorMessage}</h1>}
        {this.state.serverOnline && <img src='images/dmptlogo.png' alt='DMPT' style={{ height: '20vh' }} />}
        {this.state.serverOnline || <>
          <br />
          <h2>Connecting to Heroku...</h2>
        </>}
      </div>
    )
  }
}
