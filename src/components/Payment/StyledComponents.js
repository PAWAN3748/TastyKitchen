import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsFillCheckCircleFill} from 'react-icons/bs'

export const CheckIcon = styled(BsFillCheckCircleFill)`
  color: #22c55e;
  font-size: 50px;
`
export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const PaymentSuccess = styled.h1`
  font-family: DM Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
`
export const ThankYou = styled.p`
  font-family: DM Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: center;
  color: #64748b;
`
export const PaymentHomeButton = styled.button`
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
export const PaymentHomeLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  text-decoration: none;
  border: none;
`
