import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  MobileLoginFormContainer,
  LoginPageImageContainer,
  LoginHeading,
  LoginHeadingAndImageContainer,
  FormContainer,
  InputFieldContainer,
  InputLabel,
  InputField,
  LoginButton,
  ErrorMessage,
  DesktopLoginFormContainer,
  DesktopFormContainer,
  DesktopAppHeading,
  HatIcon,
  DesktopLoginImageContainer,
  DesktopLoginImage,
  MobileLoginImage,
} from './StyledComponents'

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
        <InputLabel htmlFor="username">USERNAME</InputLabel>
        <InputField
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
        <InputLabel htmlFor="password">PASSWORD</InputLabel>
        <InputField
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
        <MobileLoginFormContainer>
          <LoginHeadingAndImageContainer>
            <LoginHeading>Login</LoginHeading>
            <LoginPageImageContainer>
              <MobileLoginImage
                src="https://res.cloudinary.com/joker3748/image/upload/v1633418959/TastyKitchen/Rectangle1457_rcrkft.png"
                alt="website login"
              />
            </LoginPageImageContainer>
          </LoginHeadingAndImageContainer>
          <FormContainer onSubmit={this.submitLoginForm}>
            <InputFieldContainer>{this.renderUsername()}</InputFieldContainer>
            <InputFieldContainer>{this.renderPassword()}</InputFieldContainer>
            {showSubmitError && <ErrorMessage>{errorMsg}</ErrorMessage>}
            <LoginButton type="submit">Login</LoginButton>
          </FormContainer>
        </MobileLoginFormContainer>
        <DesktopLoginFormContainer>
          <DesktopFormContainer onSubmit={this.submitLoginForm}>
            <HatIcon
              src="https://res.cloudinary.com/joker3748/image/upload/v1633445373/TastyKitchen/Frame_274hat_icon_c13yga.png"
              alt="website logo"
            />
            <DesktopAppHeading>Tasty Kitchen</DesktopAppHeading>
            <LoginHeading>Login</LoginHeading>
            <InputFieldContainer>{this.renderUsername()}</InputFieldContainer>
            <InputFieldContainer>{this.renderPassword()}</InputFieldContainer>
            {showSubmitError && <ErrorMessage>{errorMsg}</ErrorMessage>}
            <LoginButton type="submit">Login</LoginButton>
          </DesktopFormContainer>
          <DesktopLoginImageContainer>
            <DesktopLoginImage
              src="https://res.cloudinary.com/joker3748/image/upload/v1633447138/TastyKitchen/Rectangle_1456_rswv21.png"
              alt="website login"
            />
          </DesktopLoginImageContainer>
        </DesktopLoginFormContainer>
      </>
    )
  }
}

export default Login
