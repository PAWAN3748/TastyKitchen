import {Link} from 'react-router-dom'

import {BsFillCheckCircleFill} from 'react-icons/bs'

/* import {
  PaymentContainer,
  CheckIcon,
  PaymentSuccess,
  ThankYou,
  PaymentHomeButton,
  PaymentHomeLink,
} from './StyledComponents' */

import Header from '../Header'
import './index.css'
// <br className="payment-br-line" />

const Payment = () => (
  <>
    <Header />
    <div className="payment-container">
      <BsFillCheckCircleFill className="check-icon" />
      <h1 className="payment-success-heading">Payment Successful</h1>
      <p className="thank-you-text">
        Thank you for ordering Your payment is successfully completed.
      </p>
      <Link to="/" className="payment-to-home-link">
        <button type="button" className="payment-button">
          Go To Home Page
        </button>
      </Link>
    </div>
  </>
)

export default Payment
