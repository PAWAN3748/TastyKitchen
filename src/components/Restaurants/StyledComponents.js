import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {BsFillStarFill} from 'react-icons/bs'

export const EachRestaurant = styled.li`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    margin-bottom: 0px;
    justify-content: space-around;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-between;
    margin-right: 15px;
    height: 140px;
    margin-bottom: 0px;
  }
`

export const ResName = styled.h1`
  font-size: 22px;
  color: #334155;
  font-family: 'DM Sans';
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 992px) {
    margin-bottom: 10px;
    font-size: 17px;
  }
`

export const ResDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  height: 90%;
`

export const ResImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const ResImageThumb = styled.img`
  border-radius: 8px;
  width: 50%;
  height: 100%;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    width: 50%;
    height: 100%;
    align-self: flex-start;
  }
`
export const ResNameAndRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  width: 45%;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    justify-content: space-around;
  }
  @media screen and (min-width: 992px) {
    justify-content: space-around;
  }
`

export const ResCuisine = styled.p`
  font-family: 'DM Sans';
  font-size: 18px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) and (max-width: 991px) {
    font-size: 14px;
    margin-bottom: 0px;
  }
  @media screen and (min-width: 992px) {
    margin-bottom: 5px;
    font-size: 15px;
  }
`

export const ResStar = styled(BsFillStarFill)`
  color: #ffcc00;
  margin-top: 0px;
`
export const StarAndRatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`
export const ResRating = styled.p`
  font-size: 14px;
  color: #334155;
  font-family: 'DM Sans';
  font-weight: 700;
  margin-left: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const LinkComponent = styled(Link)`
  text-decoration: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #64748b;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    width: 33%;
  }
`
