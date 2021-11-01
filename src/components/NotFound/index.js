import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

/* import {
  NotFoundContainer,
  NotFoundHeading,
  NotFoundImage,
  NotFoundText,
  NotFoundHomeLink,
  NotFoundHomeButton,
  NotFoundTextDesktop,
} from './StyledComponents' */

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container">
      <img
        className="not-found-image"
        src="https://res.cloudinary.com/joker3748/image/upload/v1634976331/TastyKitchen/erroring_1_pyjfca.png"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-text">
        we are sorry, the page you requested could not be found.
        <br className="break-line" /> Please go back to the homepage
      </p>

      <Link to="/" className="not-found-home-link">
        <button type="submit" className="not-found-home-button">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
