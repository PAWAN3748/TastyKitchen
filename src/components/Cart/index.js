import Header from '../Header'
// import Footer from '../Footer'
import CartContext from '../../context/CartContext'
// import {CartContainer} from './StyledComponents'
import EmptyCart from '../EmptyCart'
import CartListView from '../CartList'

const Cart = () => (
  <CartContext.Consumer>
    {() => {
      const localList = JSON.parse(localStorage.getItem('cartData'))
      const formattedList = localList === null ? [] : localList
      const showEmptyView = formattedList.length === 0

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? <EmptyCart /> : <CartListView />}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

/* const Cart = () => {
  const localList = JSON.parse(localStorage.getItem('cartData'))
  const formattedList = localList === null ? [] : localList
  const showEmptyView = formattedList.length === 0

  return (
    <>
      <Header />
      <div className="cart-container">
        {showEmptyView ? <EmptyCart /> : <CartListView />}
      </div>
    </>
  )
} */

export default Cart
