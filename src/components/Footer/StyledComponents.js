import styled from 'styled-components'
import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0f172a;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  padding-top: 32px;
`
export const FooterLogo = styled.img`
  height: 43px;
  width: 53px;
  color: white;
`
export const FooterHeading = styled.h1`
  font-family: 'DM Sans';
  font-size: 26px;
  line-height: 16px;
  color: #ffffff;
  font-style: italic;
  margin-left: 10px;
`
export const FooterLogoHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const FooterAppLine = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  width: 90%;
  text-align: center;
  line-height: 30px;
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    margin-bottom: 35px;
  }
`
export const ContactUs = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  width: 60%;
  text-align: center;
  margin-top: 0px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const SocialAppsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 15%;
  }
`
export const PinterestIcon = styled(FaPinterestSquare)`
  background-color: #0f172a;
  color: #ffffff;
  height: 30px;
  width: 30px;
`
export const InstagramIcon = styled(FaInstagram)`
  color: #0f172a;
  height: 30px;
  width: 30px;
  color: #ffffff;
`
export const TwitterIcon = styled(FaTwitter)`
  color: #ffffff;
  height: 30px;
  width: 30px;
`
export const FacebookIcon = styled(FaFacebookSquare)`
  color: #ffffff;
  height: 30px;
  width: 30px;
`
