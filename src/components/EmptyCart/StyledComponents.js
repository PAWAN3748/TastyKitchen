import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 25px;
`
export const NoOrders = styled.h1`
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: center;
  color: #1e293b;
`
export const AddSomething = styled.p`
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #64748b;
`
export const OrderNowButton = styled.button`
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
export const OrderNowLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  border: none;
`
export const EmptyCartImage = styled.img`
  height: 175px;
  width: 203px;
  left: 79px;
  top: 142px;
  border-radius: 0px;
  @media screen and (min-width: 768px) {
    height: 300px;
    width: 375px;
    left: 508px;
    top: 238px;
    border-radius: 0px;
  }
`
