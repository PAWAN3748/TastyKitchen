import {Link} from 'react-router-dom'
import styled from 'styled-components'

import {BiRupee} from 'react-icons/bi'

export const CartListItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
`
export const ss = styled.li`
  display: flex;
  flex-direction: row;
`
export const CartHrLine = styled.hr`
  width: 95vw;
`

export const Rupee = styled(BiRupee)`
  font-family: DM Sans;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #334155;
  margin-bottom: 15px;
  color: #ffa412;
  margin-top: 15px;
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const TotalOrderPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`
export const TotalOrderText = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
`
export const TotalPrice = styled.p`
  font-family: DM Sans;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: right;
`
export const PlaceOrderButton = styled.button`
  height: 50px;
  width: 140px;
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
export const LinkPlaceOrder = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  border: none;
`
