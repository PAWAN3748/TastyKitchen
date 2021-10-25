import {Link} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import Footer from '../Footer'
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
          <CartListItemContainer>
            {cartList.map(each => (
              <CartItem key={each.id} cartItemDetails={each} />
            ))}
          </CartListItemContainer>
          <CartHrLine />
          <TotalOrderPrice>
            <TotalOrderText>Order Total : </TotalOrderText>
            <PriceContainer data-testid="total-price">
              <Rupee />
              <TotalPrice data-testid="total-price">
                {TotalOrderAmount}.00
              </TotalPrice>
            </PriceContainer>
          </TotalOrderPrice>
          <LinkPlaceOrder to="/payment_success">
            <PlaceOrderButton type="button" onClick={onClickPlaceOrder}>
              Place Order
            </PlaceOrderButton>
          </LinkPlaceOrder>
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
