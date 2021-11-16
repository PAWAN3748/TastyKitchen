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
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value

      const totalPrice = (foodCost * foodCount).toFixed(2)

      const onIncrement = () => {
        incrementCartItemQuantity(foodId)
      }

      const onDecrement = () => {
        decrementCartItemQuantity(foodId)
      }

      return (
        <>
          <li className="cart-list-item">
            <div
              className="cart-details-list-item-container"
              data-testid="cartItem"
            >
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
                  <p
                    className="cart-item-food-count"
                    data-testid="item-quantity"
                  >
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
                </div>
              </div>
            </div>
          </li>
        </>
      )
    }}
  </CartContext.Consumer>
)

/* const CartItem = props => {
  const {cartItemDetails} = props
  const {foodImageUrl, foodName, foodCost, foodId, foodCount} = cartItemDetails
  const totalPrice = (foodCost * foodCount).toFixed(2)

  const removeCartItem = id => {
    const localList = JSON.parse(localStorage.getItem('cartData'))
    const updatedCartList = localList.filter(
      eachCartItem => eachCartItem.foodId !== id,
    )
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
  }

  const onIncrement = () => {
    const localList = JSON.parse(localStorage.getItem('cartData'))
    const newData = localList.map(eachCartItem => {
      if (foodId === eachCartItem.foodId) {
        const updatedQuantity = eachCartItem.foodCount + 1
        return {...eachCartItem, foodCount: updatedQuantity}
      }
      return eachCartItem
    })

    localStorage.setItem('cartData', JSON.stringify(newData))
  }

  const onDecrement = () => {
    const localList = JSON.parse(localStorage.getItem('cartData'))
    const foodObject = localList.find(
      eachCartItem => eachCartItem.foodId === foodId,
    )
    if (foodObject.foodCount > 1) {
      const newData = localList.map(eachCartItem => {
        if (foodId === eachCartItem.foodId) {
          const updatedQuantity = eachCartItem.foodCount - 1
          return {...eachCartItem, foodCount: updatedQuantity}
        }
        return eachCartItem
      })
      localStorage.setItem('cartData', JSON.stringify(newData))
    } else {
      removeCartItem(foodId)
    }
  }

  return (
    <>
      <li className="cart-list-item">
        <div
          className="cart-details-list-item-container"
          data-testid="cartItem"
        >
          <img className="cart-item-image" src={foodImageUrl} alt="foodItem" />
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
            </div>
          </div>
        </div>
      </li>
    </>
  )
} */

export default CartItem
