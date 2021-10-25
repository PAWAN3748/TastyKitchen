import {
  PaymentContainer,
  CheckIcon,
  PaymentSuccess,
  ThankYou,
  PaymentHomeButton,
  PaymentHomeLink,
} from './StyledComponents'
import Header from '../Header'

const Payment = () => (
  <>
    <Header />
    <PaymentContainer>
      <CheckIcon />
      <PaymentSuccess>Payment Successful</PaymentSuccess>
      <ThankYou>
        Thank you for ordering
        <br />
        Your payment is successfully completed.
      </ThankYou>
      <PaymentHomeLink to="/">
        <PaymentHomeButton>Go To Home Page</PaymentHomeButton>
      </PaymentHomeLink>
    </PaymentContainer>
  </>
)

export default Payment
