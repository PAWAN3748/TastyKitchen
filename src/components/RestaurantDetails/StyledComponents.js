import {BsStarFill} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'
import styled from 'styled-components'

export const ResItemBgContainer = styled.div`
  background-image: url('https://res.cloudinary.com/joker3748/image/upload/v1634044583/TastyKitchen/res_bg1_hoiymd.png');
  background-repeat: no-repeat;
  background-size: 100vw 100%;
  height: 210px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    height: 344px;
  }
`
export const ResItemImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`
export const ResItemImage = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 134px;
  margin-top: -74px;
  margin-left: -64px;
  @media screen and (min-width: 768px) {
    border-radius: 8px;
    width: 445px;
    height: 280px;
    margin-top: 32px;
    margin-left: 115px;
  }
`
export const ResItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 25px;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`
export const ResItemName = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.20000000298023224px;
  text-align: left;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 20px;
    line-height: 40px;
  }
`
export const ResItemCuisine = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Location = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`
export const RatingAndCostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10px;
`
export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid #ffffff;
  width: 100px;
`

export const CostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  width: 100px;
  @media screen and (min-width: 768px) {
    font-size: 150px;
  }
`
export const ResRating = styled.p`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const Cost = styled.p`
  font-family: DM Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const RatingStar = styled(BsStarFill)`
  color: #ffffff;
  margin-right: 5px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const Rupee = styled(BiRupee)`
  color: #ffffff;
  margin-right: 5px;
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`

export const RupeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
`
export const ReviewsCount = styled.p`
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const CostForTwo = styled.p`
  font-family: DM Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const FoodDetailsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 100px;
  }
`
export const ResLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
