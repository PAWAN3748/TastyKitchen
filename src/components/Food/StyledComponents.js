import styled from 'styled-components'
import {BsStarFill} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'

export const FoodListItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 5px;
  height: 180px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const FoodItemImageContainer = styled.div`
  display: flex;
`

export const FoodItemImage = styled.img`
  width: 200px;
  height: 160px;
  border-radius: 8px;
`
export const FoodItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 15px;
  height: 90%;
`
export const FoodHeading = styled.h1`
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  color: #334155;
  margin-top: 0px;
  margin-bottom: 10px;
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
`
export const RatingStar = styled(BsStarFill)`
  color: #ffcc00;
  margin-right: 5px;
  font-size: 18px;
  margin-top: 0px;
`
export const FoodRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const FoodRating = styled.p`
  height: 18px;
  width: 22px;
  left: 216px;
  top: 335px;
  font-size: 16px;
`
export const FoodAddButton = styled.button`
  width: 55px;
  height: 35px;
  color: #ffa412;
  border: #ffa412 1px solid;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
`
export const AddOrSubContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  margin-top: 0px;
`
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
