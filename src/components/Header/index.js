import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
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
        <Nav>
          <LogoAndAppNameContainer>
            <HeaderLogo
              src="https://res.cloudinary.com/joker3748/image/upload/v1633445373/TastyKitchen/Frame_274hat_icon_c13yga.png"
              alt="website logo"
            />
            <HeaderAppHeading>TastyKitchen</HeaderAppHeading>
          </LogoAndAppNameContainer>
          <LogoButton onClick={this.onClickBarButton}>
            <Bars />
          </LogoButton>
          <DesktopMenuItemContainer>
            <ListItem onClick={this.onHomeClick}>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: isHomeActive ? '#f7931e' : '#334155',
                }}
              >
                Home
              </Link>
            </ListItem>
            <ListItem onClick={this.onCartClick}>
              <Link
                to="/cart"
                style={{
                  textDecoration: 'none',
                  color: isCartActive ? '#f7931e' : '#334155',
                }}
              >
                Cart
              </Link>
            </ListItem>
            <ListItem>
              <LogoutButton onClick={this.onClickLogoutButton}>
                Logout
              </LogoutButton>
            </ListItem>
          </DesktopMenuItemContainer>
        </Nav>
        {isClicked ? (
          <BurgerIconItemsContainer>
            <MenuItemContainer>
              <ListItem onClick={this.onHomeClick}>
                <Link
                  to="/"
                  style={{
                    textDecoration: 'none',
                    color: isHomeActive ? '#f7931e' : '#334155',
                  }}
                >
                  Home
                </Link>
              </ListItem>
              <ListItem onClick={this.onCartClick}>
                <Link
                  to="/cart"
                  style={{
                    textDecoration: 'none',
                    color: isCartActive ? '#f7931e' : '#334155',
                  }}
                >
                  Cart
                </Link>
              </ListItem>
              <ListItem>
                <LogoutButton onClick={this.onClickLogoutButton}>
                  Logout
                </LogoutButton>
              </ListItem>
            </MenuItemContainer>
            <CloseMenuButton>
              <CloseButton onClick={this.onClickBarButton} />
            </CloseMenuButton>
          </BurgerIconItemsContainer>
        ) : null}
      </>
    )
  }
}

export default withRouter(Header)
