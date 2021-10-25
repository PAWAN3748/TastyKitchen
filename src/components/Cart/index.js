import Header from '../Header'
import Footer from '../Footer'
import CartContext from '../../context/CartContext'
import {CartContainer} from './StyledComponents'
import EmptyCart from '../EmptyCart'
import CartListView from '../CartList'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const data = JSON.parse(localStorage.getItem('cartList'))
      const showEmptyView = cartList.length === 0

      return (
        <>
          <Header />
          <CartContainer>
            {showEmptyView ? <EmptyCart /> : <CartListView />}
          </CartContainer>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
