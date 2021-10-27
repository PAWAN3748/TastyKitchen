import {Link} from 'react-router-dom'
import {BiRupee} from 'react-icons/bi'

import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import Footer from '../Footer'

/*
import {
  CartListItemContainer,
  CartHrLine,
  TotalOrderPrice,
  TotalOrderText,
  TotalPrice,
  PriceContainer,
  Rupee,
  PlaceOrderButton,
  LinkPlaceOrder,
} from './StyledComponents'

*/

import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, placeOrderButton} = value
      let TotalOrderAmount = 0
      cartList.forEach(each => {
        TotalOrderAmount += each.foodCount * each.foodCost
      })

      const onClickPlaceOrder = () => {
        placeOrderButton()
      }

      const data = JSON.parse(localStorage.getItem('cartList'))

      return (
        <>
          <ul className="cart-list-item-container">
            {cartList.map(each => (
              <CartItem key={each.id} cartItemDetails={each} />
            ))}
          </ul>
          <hr className="cart-hr-line" />
          <div className="total-order-price">
            <p className="total-order-text">Order Total : </p>
            <div className="price-container" testid="total-price">
              <BiRupee clasName="cart-list-rupee" />
              <p className="total-price" testid="total-price">
                {TotalOrderAmount}.00
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
