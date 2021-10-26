import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`

export const NotFoundHeading = styled.h1`
  font-family: DM Sans;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
`
export const NotFoundImage = styled.img`
  height: 170px;
  width: 150px;
  left: 110px;
  top: 140px;
  border-radius: 0px;
  @media screen and (min-width: 768px) {
    height: 297px;
    width: 269px;
    left: 586px;
    top: 235px;
    border-radius: 0px;
  }
`
export const NotFoundText = styled.p`
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  color: #475569;
  text-align: center;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NotFoundTextDesktop = styled.p`
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  color: #475569;
  text-align: center;
  margin-top: 0px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const NotFoundHomeButton = styled.button`
  height: 50px;
  width: 180px;
  border-radius: 8px;
  padding: 8px, 16px, 8px, 16px;
  background-color: #f7931e;
  color: #ffffff;
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  margin-right: 20px;
  margin-bottom: 40px;
  cursor: pointer;
  border: none;
`
export const NotFoundHomeLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  border: none;
`
