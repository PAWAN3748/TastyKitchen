import Header from '../Header'
import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundImage,
  NotFoundText,
  NotFoundHomeLink,
  NotFoundHomeButton,
  NotFoundTextDesktop,
} from './StyledComponents'

const NotFound = () => (
  <>
    <Header />
    <NotFoundContainer>
      <NotFoundImage
        src="https://res.cloudinary.com/joker3748/image/upload/v1634976331/TastyKitchen/erroring_1_pyjfca.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundText>
        we are sorry, the page you requested could not be found. Please go back
        to the homepage
      </NotFoundText>
      <NotFoundTextDesktop>
        we are sorry, the page you requested could not be found
      </NotFoundTextDesktop>
      <NotFoundTextDesktop>Please go back to the homepage</NotFoundTextDesktop>
      <NotFoundHomeLink to="/">
        <NotFoundHomeButton>Home Page</NotFoundHomeButton>
      </NotFoundHomeLink>
    </NotFoundContainer>
  </>
)

export default NotFound
