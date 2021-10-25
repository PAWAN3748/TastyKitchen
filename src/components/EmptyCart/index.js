import Header from '../Header'
import {
  EmptyContainer,
  NoOrders,
  OrderNowLink,
  AddSomething,
  OrderNowButton,
  EmptyCartImage,
} from './StyledComponents'

const EmptyCart = () => (
  <>
    <EmptyContainer>
      <EmptyCartImage
        src="https://res.cloudinary.com/joker3748/image/upload/v1634972385/TastyKitchen/cooking_1_nqqhsp.png"
        alt="`empty cart"
      />
      <NoOrders>No Orders Yet!</NoOrders>
      <AddSomething>
        Your cart is empty. Add something from the menu.
      </AddSomething>
      <OrderNowLink to="/">
        <OrderNowButton>Order Now</OrderNowButton>
      </OrderNowLink>
    </EmptyContainer>
  </>
)

export default EmptyCart
