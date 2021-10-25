import {
  FooterContainer,
  FooterLogo,
  FooterHeading,
  FooterLogoHeadingContainer,
  SocialAppsContainer,
  FooterAppLine,
  PinterestIcon,
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  ContactUs,
} from './StyledComponents'

const Footer = () => (
  <FooterContainer>
    <FooterLogoHeadingContainer>
      <FooterLogo
        src="https://res.cloudinary.com/joker3748/image/upload/v1633871551/TastyKitchen/Group_7420_znd2kq.png"
        alt="website-footer-logo"
      />
      <FooterHeading>Tasty Kitchen</FooterHeading>
    </FooterLogoHeadingContainer>
    <FooterAppLine>The only thing we are serious about is food.</FooterAppLine>
    <ContactUs>Contact Us</ContactUs>
    <SocialAppsContainer>
      <PinterestIcon alt="pintrest-social-icon" />
      <InstagramIcon alt="instagram-social-icon" />
      <TwitterIcon alt="twitter-social-icon" />
      <FacebookIcon alt="facebook-social-icon" />
    </SocialAppsContainer>
  </FooterContainer>
)

export default Footer
