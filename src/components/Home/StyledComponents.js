import styled from 'styled-components'
import {BsFilterLeft, BsChevronLeft, BsChevronRight} from 'react-icons/bs'

export const SlickContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const PopularResHeading = styled.h1`
  color: #183b56;
  font-family: 'DM Sans';
  font-size: 26px;
  font-weight: 700;
  margin-top: 15px;
`
export const AllRestaurantContainer = styled.div`
  padding-left: 15px;
  padding-right:15px
  display: flex;
  flex-direction: column;
  @media screen and (min-width:768px){
      width: 90vw;
  }
`
export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const ResIntroSortContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`
export const ResIntro = styled.p`
  color: #64748b;
  font-family: 'DM Sans';
  font-size: 18px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 0px;
`
export const SortByContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const SortIcon = styled(BsFilterLeft)`
  font-size: 24px;
  color: #475569;
  font-weight: 600;
  margin-right: 6px;
`
export const SortBy = styled.p`
  color: #475569;
  font-size: 16px;
  font-weight: 500;
  font-family: 'DM Sans';
`
export const SortBySelect = styled.select`
  color: #475569;
  background-color: #ffffff;
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 500;
  border: none;
  padding: 12px;
  outline: none;
  cursor: pointer;
`

export const SortByOption = styled.option`
  color: #475569;
  font-size: 14px;
  font-family: 'DM Sans';
`
export const RestaurantListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
export const ActivePageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LeftArrowIcon = styled(BsChevronLeft)`
  height: 15px;
  width: 15px;
`
export const RightArrowIcon = styled(BsChevronRight)`
  height: 15px;
  width: 15px;
`

export const ArrowContainer = styled.div`
  border: 0.5px normal #334155;
`
export const ArrowBButton = styled.button`
  text-align: center;
  background-color: transparent;
  cursor: pointer;
`
export const ActivePage = styled.p`
  color: #334155;
  font-size: 20px;
  font-family: 'DM Sans';
  font-weight: 700;
  margin-left: 10px;
  margin-right: 10px;
`
export const HrLine = styled.hr`
  width: 90vw;
  background-color: #cbd2d9;
  border: 1px normal;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`
export const SliderContainer = styled.div`
  border: none;
`
