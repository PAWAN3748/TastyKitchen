import {BiRupee} from 'react-icons/bi'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {cartItemDetails} = props
      const {
        foodImageUrl,
        foodName,
        foodCost,
        foodId,
        foodCount,
      } = cartItemDetails
      // console.log(foodCount, 'cou')
      const {
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        // cartList,
      } = value

      const totalPrice = foodCost * foodCount
      // const isZero = cartList.length === 0

      const onIncrement = () => {
        incrementCartItemQuantity(foodId)
      }

      const onDecrement = () => {
        decrementCartItemQuantity(foodId)
      }

      return (
        <>
          <li className="cart-list-item" data-testid="cartItem">
            <img
              className="cart-item-image"
              src={foodImageUrl}
              alt="foodItem"
            />
            <div className="cart-item-details-container">
              <h1 className="Cart-item-list-heading">{foodName}</h1>
              <div className="cart-item-add-sub-container">
                <button
                  className="cart-item-add-sub-button"
                  type="button"
                  onClick={onDecrement}
                  data-testid="decrement-quantity"
                >
                  -
                </button>
                <p className="cart-item-food-count" data-testid="item-quantity">
                  {foodCount}
                </p>
                <button
                  className="cart-item-add-sub-button"
                  type="button"
                  onClick={onIncrement}
                  data-testid="increment-quantity"
                >
                  +
                </button>
              </div>
              <div className="cart-item-price-container">
                <BiRupee className="cart-item-rupee-icon" />
                <p
                  className="cart-item-food-total-price"
                  data-testid="total-price"
                >
                  {totalPrice}
                </p>
                <p className="cart-item-food-total-price">.00</p>
              </div>
            </div>
          </li>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
