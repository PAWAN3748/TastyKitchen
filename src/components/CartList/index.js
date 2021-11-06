import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'

import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import Footer from '../Footer'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, placeOrderButton} = value
      let TotalOrderAmount = 0
      cartList.forEach(each => {
        TotalOrderAmount += each.foodCount * each.foodCost
      })

      const orderAmount = TotalOrderAmount.toFixed(2)

      const onClickPlaceOrder = () => {
        placeOrderButton()
      }

      const localList = JSON.parse(localStorage.getItem('cartData'))
      console.log(localList, 'local')

      return (
        <>
          <ul className="cart-list-item-container">
            {localList.map(each => (
              <CartItem key={each.id} cartItemDetails={each} />
            ))}
          </ul>
          <hr className="cart-hr-line" />
          <div className="total-order-price">
            <h1 className="total-order-text">Order Total: </h1>
            <div className="price-container">
              <BiRupee clasName="cart-list-rupee" />
              <p className="total-price" data-testid="total-price">
                {orderAmount}
              </p>
            </div>
          </div>
          <Link to="/payment_success" className="link-place-order">
            <button
              className="place-order-button"
              type="button"
              onClick={onClickPlaceOrder}
            >
              Place Order
            </button>
          </Link>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
