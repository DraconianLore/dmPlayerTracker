import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const baseURL = process.env.REACT_APP_BASEURL

export default class LoginRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      new_user: false,
      errorMessage: false,
      serverOnline: false,
      screenWidth: ''
    }
  }
  signup = (event) => {
    this.setState({ errorMessage: false })
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
        Cookies.set('player', false, { expires: 1 });
        this.props.login(response.data.access_token, response.data.username, false)
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
      Cookies.set('username', response.data.username, { expires: 1 });
     this.props.login(response.data.access_token, response.data.username, false)
    }).catch((error) => {
      this.setState({ errorMessage: error.response.data.message })
    })
  }
  demoLogin = () => {
    this.setState({ errorMessage: false })
    axios({
      method: 'post',
      url: `${baseURL}login`,
      data: {
        email: 'test@test.test',
        password: 'test'
      }
    }).then((response) => {
      Cookies.set('token', response.data.access_token, { expires: 1 });
      Cookies.set('username', response.data.username, { expires: 1 });
     this.props.login(response.data.access_token, response.data.username, false)
    }).catch((error) => {
      this.setState({ errorMessage: error.response.data.message })
    })
  }
  loginSignup = () => {
    this.setState({ new_user: !this.state.new_user })
  }
  componentWillMount() {
    this.setState({ screenWidth: window.innerWidth });
    if (Cookies.get('token')) {
      if (Cookies.get('player')) {
        this.props.hasCookie(Cookies.get('token'), Cookies.get('username'), Cookies.get('player'))
      } else {
        this.props.hasCookie(Cookies.get('token'), Cookies.get('username'), false)
      }
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
  closeWarning = (event) => {
    event.preventDefault()
    this.setState({ screenWidth: 1300 })
  }
  playersheet = (event) => {
    event.preventDefault();
    this.props.playersheet();
  }
  render() {
    return (
      <div>
        {this.state.screenWidth < 701 && <>
          <div className='small-screen'>
            <h1>
              Your screen is too small, please consider running this on a computer as it is unlikely you will be running your campaign from a mobile device.
            </h1>
            <h2 style={{ color: 'burlywood' }}>
              If viewing on an Ipad/tablet please rotate your screen to landscave to avoid squished text.
            </h2>
            <button style={{ minWidth: '50px', backgroundColor: 'green', padding: '5px', borderColor: 'darkgreen' }} onClick={this.closeWarning} >
              <span style={{ fontSize: '1em', color: 'antiquewhite' }}>
                I understand
                </span>
            </button>
          </div>
        </>}
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
          <button className='player-login-btn' onClick={this.playersheet}>
            Player Login
            </button>
          <br />
          <br />

          <h1>
            Welcome to the dmPlayerTracker
          </h1>
          <h1 style={{ fontSize: '150%' }}>
            <em>Just browsing?</em>
          </h1>
          <button className='example-btn' onClick={this.demoLogin}>
            Try out the app
          </button>
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
                <label className="form-label">Username</label>
                <input className="login-text" type="username" autoComplete="user" placeholder="Username" name="Username" required />
                <label className="form-label">Email</label>
                <input className="login-text" type="email" placeholder="Email" autoComplete="email" name="Email" required />
                <label className="form-label">Password</label>
                <input className="login-text" type="password" placeholder="Password" autoComplete="new-password" name="Password" required />
                <label className="form-label">Referal Code</label>
                <input className="login-text" type="text" autoComplete="referal" placeholder="You must be referred to register" name="Verification" required />
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
