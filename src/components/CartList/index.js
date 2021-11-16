import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'

import CartContext from '../../context/CartContext'

import CartItem from '../CartItem'

import Footer from '../Footer'

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {placeOrderButton} = value
      const localList = JSON.parse(localStorage.getItem('cartData'))

      let TotalOrderAmount = 0
      localList.forEach(each => {
        TotalOrderAmount += each.foodCount * each.foodCost
      })

      const orderAmount = TotalOrderAmount.toFixed(2)

      const onClickPlaceOrder = () => {
        placeOrderButton()
      }

      return (
        <>
          <ul className="cart-list-item-container">
            <li className="cart-item-header">
              <h1 className="cart-header-names">Item</h1>
              <h1 className="cart-header-quantity">Quantity</h1>
              <h1 className="cart-header-price">Price</h1>
            </li>
            {localList.map(each => (
              <CartItem key={each.id} cartItemDetails={each} />
            ))}
          </ul>
          <hr className="cart-hr-line" />
          <div className="total-order-price">
            <h1 className="total-order-text">Order Total: </h1>
            <div className="price-container">
              <BiRupee className="cart-list-rupee" />
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

/* const CartListView = () => {
  const localList = JSON.parse(localStorage.getItem('cartData'))
  let TotalOrderAmount = 0
  localList.forEach(each => {
    TotalOrderAmount += each.foodCount * each.foodCost
  })

  const orderAmount = TotalOrderAmount.toFixed(2)

  const onClickPlaceOrder = () => {
    localStorage.clear()
  }

  return (
    <>
      <ul className="cart-list-item-container">
        <li className="cart-item-header">
          <h1 className="cart-header-names">Item</h1>
          <h1 className="cart-header-quantity">Quantity</h1>
          <h1 className="cart-header-price">Price</h1>
        </li>
        {localList.map(each => (
          <CartItem key={each.id} cartItemDetails={each} />
        ))}
      </ul>
      <hr className="cart-hr-line" />
      <div className="total-order-price">
        <h1 className="total-order-text">Order Total: </h1>
        <div className="price-container">
          <BiRupee className="cart-list-rupee" />
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
} */

export default CartListView
