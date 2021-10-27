import {Link} from 'react-router-dom'

import Header from '../Header'
import {
  EmptyContainer,
  NoOrders,
  OrderNowLink,
  AddSomething,
  OrderNowButton,
  EmptyCartImage,
} from './StyledComponents'

import './index.css'

const EmptyCart = () => (
  <>
    <div className="empty-container">
      <img
        className="empty-cart-image"
        src="https://res.cloudinary.com/joker3748/image/upload/v1634972385/TastyKitchen/cooking_1_nqqhsp.png"
        alt="`empty cart"
      />
      <h1 className="no-orders">No Orders Yet!</h1>
      <p className="add-something">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/" className="order-now-link">
        <button className="order-now-button">Order Now</button>
      </Link>
    </div>
  </>
)

export default EmptyCart
