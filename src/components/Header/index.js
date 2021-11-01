import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaBars} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

import './index.css'

class Header extends Component {
  state = {isClicked: false, isHomeActive: true, isCartActive: false}

  onClickBarButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  onHomeClick = e => {
    console.log(e)
    this.setState(prevState => ({
      isCartActive: !prevState.isCartActive,
    }))
  }

  onCartClick = () => {
    this.setState(prevState => ({
      isHomeActive: !prevState.isHomeActive,
    }))
  }

  onClickLogoutButton = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
    window.localStorage.removeItem('cartList')
  }

  renderHeaderMenu = () => {
    const {isCartActive, isHomeActive} = this.state
    return (
      <>
        <div className="header-menu-container">
          <ul className="desktop-menu-item-container">
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: isHomeActive ? '#f7931e' : '#334155',
              }}
            >
              <li className="header-home" onClick={this.onHomeClick}>
                Home
              </li>
            </Link>
            <Link
              to="/cart"
              style={{
                textDecoration: 'none',
                color: isCartActive ? '#f7931e' : '#334155',
              }}
            >
              <li className="header-home" onClick={this.onCartClick}>
                Cart
              </li>
            </Link>
            <li className="list-item">
              <button
                type="submit"
                className="logout-button"
                onClick={this.onClickLogoutButton}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="close-button-container">
          <button
            className="close-menu-button"
            type="submit"
            onClick={this.onClickBarButton}
          >
            <AiFillCloseCircle className="close-icon" />
          </button>
        </div>
      </>
    )
  }

  render() {
    const {isClicked, isHomeActive, isCartActive} = this.state
    // console.log(isClicked)

    return (
      <>
        <div className="nav-container">
          <nav className="header-nav-container">
            <Link to="/" className="logo-app-name-container">
              <img
                className="header-logo"
                src="https://res.cloudinary.com/joker3748/image/upload/v1633445373/TastyKitchen/Frame_274hat_icon_c13yga.png"
                alt="website logo"
              />
              <h1 className="header-app-heading">Tasty Kitchens</h1>
            </Link>
            <button
              type="submit"
              className="logo-button"
              onClick={this.onClickBarButton}
            >
              <FaBars className="bars" />
            </button>
          </nav>
          <div className="mobile-header-section">
            {isClicked ? this.renderHeaderMenu() : null}
          </div>
          <div className="desktop-header-section">
            {this.renderHeaderMenu()}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Header)
