import CartContext from '../../context/CartContext'
import Counter from '../Counter'
import {
  CartListItem,
  CartListHeading,
  CartItemImage,
  CartItemDetailsContainer,
  AddOrSbButton,
  FoodCount,
  AddOrSubContainer,
  FoodPrice,
  CartHrLine,
  Rupee,
  PriceContainer,
  TotalOrderPrice,
  TotalOrderText,
} from './StyledComponents'

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
        cartList,
      } = value

      const totalPrice = foodCost * foodCount
      const isZero = cartList.length === 0

      const onIncrement = () => {
        incrementCartItemQuantity(foodId)
      }

      const onDecrement = () => {
        decrementCartItemQuantity(foodId)
      }

      return (
        <>
          <CartListItem>
            <CartItemImage src={foodImageUrl} />
            <CartItemDetailsContainer>
              <CartListHeading>{foodName}</CartListHeading>
              <AddOrSubContainer>
                <AddOrSbButton
                  type="button"
                  onClick={onDecrement}
                  data-testid="decrement-quantity"
                >
                  -
                </AddOrSbButton>
                <FoodCount data-testid="item-quantity">{foodCount}</FoodCount>
                <AddOrSbButton
                  type="button"
                  onClick={onIncrement}
                  data-testid="increment-quantity"
                >
                  +
                </AddOrSbButton>
              </AddOrSubContainer>
              <PriceContainer>
                <Rupee />
                <FoodPrice>{totalPrice}.00</FoodPrice>
              </PriceContainer>
            </CartItemDetailsContainer>
          </CartListItem>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
