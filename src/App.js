import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import RestaurantDetails from './components/RestaurantDetails'
import Cart from './components/Cart'
import Payment from './components/Payment'
import CartContext from './context/CartContext'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartList: JSON.parse(localStorage.getItem('cartData')) || [],
    }
  }

  getData = () => {
    const locaList = JSON.parse(localStorage.getItem('cartData'))
    this.setState({cartList: locaList})
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
          this.saveLocalStorage()
        },
      )
    } else {
      const updatedCartList = [...cartList, food]
      this.setState({cartList: updatedCartList}, () => {
        this.saveLocalStorage()
      })
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

  /* incrementCartItemQuantity = id => {
    const localList = JSON.parse(localStorage.getItem('cartData'))
    const newData = localList.map(eachCartItem => {
      if (id === eachCartItem.foodId) {
        const updatedQuantity = eachCartItem.foodCount + 1
        return {...eachCartItem, foodCount: updatedQuantity}
      }
      return eachCartItem
    })
    localStorage.setItem('cartData', JSON.stringify(newData))
    this.setState({cartList: newData})
  }

  decrementCartItemQuantity = id => {
    const localList = JSON.parse(localStorage.getItem('cartData'))

    const foodObject = localList.find(
      eachCartItem => eachCartItem.foodId === id,
    )
    if (foodObject.foodCount > 1) {
      const newData = localList.map(eachCartItem => {
        if (id === eachCartItem.foodId) {
          const updatedQuantity = eachCartItem.foodCount - 1
          return {...eachCartItem, foodCount: updatedQuantity}
        }
        return eachCartItem
      })
      localStorage.setItem('cartData', JSON.stringify(newData))
      this.setState({cartList: newData})
    } else {
      this.removeCartItem(id)
    }
  }

  removeCartItem = id => {
    const localList = JSON.parse(localStorage.getItem('cartData'))
    const updatedCartList = localList.filter(
      eachCartItem => eachCartItem.foodId !== id,
    )
    localStorage.setItem('cartData', JSON.stringify(updatedCartList))
    this.setState({cartList: updatedCartList})
  } */

  render() {
    const {cartList} = this.state
    localStorage.setItem('cartData', JSON.stringify(cartList))
    const parsedData = JSON.parse(localStorage.getItem('cartData'))

    return (
      <>
        <CartContext.Provider
          value={{
            cartList: parsedData,
            addCartItem: this.addCartItem,
            removeCartItem: this.removeCartItem,
            incrementCartItemQuantity: this.incrementCartItemQuantity,
            decrementCartItemQuantity: this.decrementCartItemQuantity,
            saveLocalStorage: this.saveLocalStorage,
            placeOrderButton: this.placeOrderButton,
            getData: this.getData,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/cart" component={Cart} />
            <ProtectedRoute exact path="/payment_success" component={Payment} />
            <ProtectedRoute
              exact
              path="/restaurant/:restrauntId"
              component={RestaurantDetails}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </CartContext.Provider>
      </>
    )
  }
}

export default App
