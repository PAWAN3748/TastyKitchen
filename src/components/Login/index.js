import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  renderLoginFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const fetchData = await response.json()
    if (response.ok) {
      this.renderLoginSuccess(fetchData.jwt_token)
    } else {
      this.renderLoginFailure(fetchData.error_msg)
    }
  }

  renderUsername = () => {
    const {username} = this.state

    return (
      <>
        <label className="login-input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="login-input-name"
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUserName}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label className="login-input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="login-input-name"
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <>
        <div className="mobile-login-form-container">
          <div className="login-heading-image-container">
            <div className="login-page-image-container">
              <img
                className="mobile-login-image"
                src="https://res.cloudinary.com/joker3748/image/upload/v1633447138/TastyKitchen/Rectangle_1456_rswv21.png"
                alt="website login"
              />
            </div>
          </div>
          <div className="form-section-container">
            <form className="form-container" onSubmit={this.submitLoginForm}>
              <img
                className="hat-icon"
                src="https://res.cloudinary.com/joker3748/image/upload/v1633445373/TastyKitchen/Frame_274hat_icon_c13yga.png"
                alt="website logo"
              />
              <h1 className="desktop-app-heading">Tasty Kitchens</h1>
              <h1 className="login-heading">Login</h1>
              <div className="input-field-container">
                {this.renderUsername()}
              </div>
              <div className="input-field-container">
                {this.renderPassword()}
              </div>
              {showSubmitError && <p className="error-msg">{errorMsg}</p>}
              <button className="login-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Login
