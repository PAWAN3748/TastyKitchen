import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaBars} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'
import {
  Nav,
  LogoAndAppNameContainer,
  HeaderLogo,
  HeaderAppHeading,
  LogoButton,
  Bars,
  MenuItemContainer,
  ListItem,
  LogoutButton,
  BurgerIconItemsContainer,
  CloseButton,
  CloseMenuButton,
  DesktopMenuItemContainer,
} from './StyledComponents'
import './index.css'

class Header extends Component {
  state = {isClicked: false, isHomeActive: true, isCartActive: false}

  onClickBarButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  onHomeClick = () => {
    this.setState(prevState => ({
      isHomeActive: !prevState.isHomeActive,
      isCartActive: false,
    }))
  }

  onCartClick = () => {
    this.setState(prevState => ({
      isCartActive: !prevState.isCartActive,
      isHomeActive: false,
    }))
  }

  onClickLogoutButton = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
    window.localStorage.removeItem('cartList')
  }

  render() {
    const {isClicked, isHomeActive, isCartActive} = this.state
    // console.log(isClicked)

    return (
      <>
        <nav className="header-nav-container">
          <div className="logo-app-name-container">
            <img
              className="header-logo"
              src="https://res.cloudinary.com/joker3748/image/upload/v1633445373/TastyKitchen/Frame_274hat_icon_c13yga.png"
              alt="website logo"
            />
            <h1 className="header-app-heading">TastyKitchen</h1>
          </div>
          <button className="logo-button" onClick={this.onClickBarButton}>
            <FaBars className="bars" />
          </button>
          <ul className="desktop-menu-item-container">
            <li className="list-item" onClick={this.onHomeClick}>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: isHomeActive ? '#f7931e' : '#334155',
                }}
              >
                Home
              </Link>
            </li>
            <li className="list-item" m onClick={this.onCartClick}>
              <Link
                to="/cart"
                style={{
                  textDecoration: 'none',
                  color: isCartActive ? '#f7931e' : '#334155',
                }}
              >
                Cart
              </Link>
            </li>
            <li className="list-item" m>
              <button
                className="logout-button"
                onClick={this.onClickLogoutButton}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
        {isClicked ? (
          <div className="burger-icon-items-container">
            <ul className="menu-item-container">
              <li className="list-item" onClick={this.onHomeClick}>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: isHomeActive ? '#f7931e' : '#334155',
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="list-item" onClick={this.onCartClick}>
                <Link
                  to="/cart"
                  style={{
                    textDecoration: 'none',
                    color: isCartActive ? '#f7931e' : '#334155',
                  }}
                >
                  Cart
                </Link>
              </li>
              <li className="list-item">
                <button
                  className="logout-button"
                  onClick={this.onClickLogoutButton}
                >
                  Logout
                </button>
              </li>
            </ul>
            <button
              className="close-menu-button"
              onClick={this.onClickBarButton}
            >
              <AiFillCloseCircle className="close-icon" />
            </button>
          </div>
        ) : null}
      </>
    )
  }
}

export default withRouter(Header)
