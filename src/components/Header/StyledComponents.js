import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import {AiFillCloseCircle} from 'react-icons/ai'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
  padding-bottom: 0px;
  background-color: #f8fafc;
`

export const Bars = styled(FaBars)`
  cursor: pointer;
  height: 33px;
  width: 53px;
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`
export const LogoAndAppNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 32px;
  }
`
export const HeaderLogo = styled.img`
  height: 43px;
  width: 53px;
`
export const HeaderAppHeading = styled.h1`
  font-family: 'DM Sans';
  font-size: 26px;
  line-height: 16px;
  color: #f7931e;
  font-style: italic;
  margin-left: 10px;
`
export const LogoButton = styled.button`
  border-radius: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MenuItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  list-style-type: none;
  justify-content: flex-start;
  align-items: center;
  padding-left: 0px;
`

export const DesktopMenuItemContainer = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  list-style-type: none;
  justify-content: space-around;
  margin-right: 32px;
  align-items: center;
  padding-left: 0px;
  width: 300px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
// ${props => (props.active ? '#334155' : 'red')};
export const ListItem = styled.li`
  font-size: 18px;
  font-family: 'DM Sans';
  margin-top: 15px;
  font-weight: bold;
  margin-right: 15px;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    margin-right: 15px;
  }
`

export const LogoutButton = styled.button`
  height: 35px;
  color: #ffffff;
  background-color: #f7931e;
  border-radius: 8px;
  width: 95px;
  border: transparent;
  cursor: pointer;
`
export const CloseMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const CloseButton = styled(AiFillCloseCircle)`
  height: 25px;
  width: 25px;
`

export const BurgerIconItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 25px;
  padding-left: 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
/* <Nav>
          <LogoAndAppNameContainer>
            <HeaderLogo src="https://res.cloudinary.com/joker3748/image/upload/v1633445373/TastyKitchen/Frame_274hat_icon_c13yga.png" />
            <HeaderAppHeading>TastyKitchen</HeaderAppHeading>
          </LogoAndAppNameContainer>
          <LogoButton onClick={this.onClickBarButton}>
            <Bars />
          </LogoButton>
        </Nav>
        {isClicked ? (
          <MenuItemContainer>
            <h1>Home</h1>
            <h1>Cart</h1>
          </MenuItemContainer>
        ) : null} 

        */
