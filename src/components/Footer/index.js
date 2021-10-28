import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

/* import {
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
} from './StyledComponents' */

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="footer-logo-heading-container">
      <img
        className="footer-logo"
        src="https://res.cloudinary.com/joker3748/image/upload/v1633871551/TastyKitchen/Group_7420_znd2kq.png"
        alt="website-footer-logo"
      />
      <h1 className="footer-heading">Tasty Kitchen</h1>
    </div>
    <p className="footer-app-line">
      The only thing we are serious about is food.
      <br /> Contact us on
    </p>
    <div className="social-apps-container">
      <FaPinterestSquare
        className="social-icon"
        data-testid="pintrest-social-icon"
      />
      <FaInstagram
        className="social-icon"
        data-testid="instagram-social-icon"
      />
      <FaTwitter className="social-icon" data-testid="twitter-social-icon" />
      <FaFacebookSquare
        className="social-icon"
        data-testid="facebook-social-icon"
      />
    </div>
  </div>
)

export default Footer
