import {Link} from 'react-router-dom'

import './index.css'

const EmptyCart = () => (
  <>
    <div className="empty-container">
      <img
        className="empty-cart-image"
        src="https://res.cloudinary.com/joker3748/image/upload/v1634972385/TastyKitchen/cooking_1_nqqhsp.png"
        alt="`empty cart"
      />
      <h1 className="no-orders">No Order Yet!</h1>
      <p className="add-something">
        Your cart is empty. Add something from the menu.
      </p>
      <Link to="/" className="order-now-link">
        <button className="order-now-button" type="submit">
          Order Now
        </button>
      </Link>
    </div>
  </>
)

export default EmptyCart
