import {Component} from 'react'
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'
import Cart from './components/Cart'
import Payment from './components/Payment'
import CartContext from './context/CartContext'
import NotFound from './components/NotFound'

import './App.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartList: JSON.parse(localStorage.getItem('cartData')) || [],
    }
  }

  addCartItem = food => {
    const {cartList} = this.state

    const foodObject = cartList.find(
      eachCartItem => eachCartItem.foodId === food.foodId,
    )

    if (foodObject) {
      this.setState(
        prevState => ({
          cartList: prevState.cartList.map(eachCartItem => {
            if (foodObject.foodId === eachCartItem.foodId) {
              const updatedQuantity = eachCartItem.foodCount + food.foodCount

              return {...eachCartItem, foodCount: updatedQuantity}
            }

            return eachCartItem
          }),
        }),
        () => {
          localStorage.setItem('cartData', JSON.stringify(cartList))
        },
      )
    } else {
      const updatedCartList = [...cartList, food]
      this.setState({cartList: updatedCartList})
    }
  }

  incrementCartItemQuantity = id => {
    this.setState(
      prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.foodId) {
            const updatedQuantity = eachCartItem.foodCount + 1
            return {...eachCartItem, foodCount: updatedQuantity}
          }
          return eachCartItem
        }),
      }),
      () => {
        this.saveLocalStorage()
      },
    )
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const foodObject = cartList.find(eachCartItem => eachCartItem.foodId === id)
    if (foodObject.foodCount > 1) {
      this.setState(
        prevState => ({
          cartList: prevState.cartList.map(eachCartItem => {
            if (id === eachCartItem.foodId) {
              const updatedQuantity = eachCartItem.foodCount - 1
              return {...eachCartItem, foodCount: updatedQuantity}
            }
            return eachCartItem
          }),
        }),
        () => {
          this.saveLocalStorage()
        },
      )
    } else {
      this.removeCartItem(id)
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    console.log(cartList)
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.foodId !== id,
    )
    this.setState({cartList: updatedCartList}, () => {
      this.saveLocalStorage()
    })
  }

  saveLocalStorage = () => {
    const {cartList} = this.state
    localStorage.setItem('cartData', JSON.stringify(cartList))
  }

  placeOrderButton = () => {
    this.setState({cartList: []})
  }

  render() {
    const {cartList} = this.state
    /* localStorage.setItem('cartList', JSON.stringify(cartList))
    const data = JSON.parse(localStorage.getItem('cartList')) */

    return (
      <BrowserRouter>
        <CartContext.Provider
          value={{
            cartList,
            addCartItem: this.addCartItem,
            removeCartItem: this.removeCartItem,
            incrementCartItemQuantity: this.incrementCartItemQuantity,
            decrementCartItemQuantity: this.decrementCartItemQuantity,
            saveLocalStorage: this.saveLocalStorage,
            placeOrderButton: this.placeOrderButton,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <ProtectedRoute exact path="/payment_success" component={Payment} />
            <ProtectedRoute
              exact
              path="/restaurants/:restrauntId"
              component={RestaurantDetails}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </BrowserRouter>
    )
  }
}

export default App
