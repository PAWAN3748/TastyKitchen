import styled from 'styled-components'
import {BiRupee} from 'react-icons/bi'

export const CartListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`
export const CartListHeading = styled.h1`
  color: #183b56;
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
`
export const CartItemImage = styled.img`
  width: 156px;
  height: 126px;
  border-radius: 4px;
`
export const CartItemDetailsContainer = styled.div`
  margin-left: 16px;
  justify-content: space-between;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
`
export const AddOrSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 35px;
`
export const AddOrSbButton = styled.button`
  background-color: transparent;
  border: 1px normal #3e4c59;
  border-radius: 4px;
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
`
export const FoodCount = styled.p`
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #475569;
  width: 40px;
  text-align: center;
`
export const FoodPrice = styled.p`
  font-family: DM Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #334155;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #ffa412;
  margin-top: 15px;
`
export const CartHrLine = styled.hr`
  width: 95vw;
  margin-top: 32px;
`

export const Rupee = styled(BiRupee)`
  font-family: DM Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #334155;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #ffa412;
  margin-top: 15px;
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const TotalOrderPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
