import {Component} from 'react'
import {BiRupee} from 'react-icons/bi'
import {BsStarFill} from 'react-icons/bs'

import Counter from '../Counter'
import CartContext from '../../context/CartContext'
import './index.css'

class Food extends Component {
  state = {
    isClicked: false,
    foodCount: 1,
  }

  addFoodButton = () => (
    <CartContext.Consumer>
      {value => {
        const {food} = this.props
        const {foodCost, foodId, foodImageUrl, foodName} = food
        const newFood = {foodCost, foodId, foodImageUrl, foodName}
        const {isClicked} = this.state
        const {
          addCartItem,
          incrementCartItemQuantity,
          decrementCartItemQuantity,
        } = value

        const onClickCount = () => {
          const {foodCount} = this.state
          addCartItem({...newFood, foodCount})
        }

        const onIncreaseFood = () => {
          incrementCartItemQuantity(foodId)
        }

        const onDecreaseFood = () => {
          decrementCartItemQuantity(foodId)
        }

        const onFoodCount = newCount => {
          if (newCount === 0) {
            this.setState({isClicked: false})
          }
        }

        const onClickAdd = () => {
          this.setState(
            prevState => ({isClicked: !prevState.isClicked}),
            () => {},
          )
          onClickCount()
        }

        return (
          <>
            {isClicked ? (
              <Counter
                onFoodCount={onFoodCount}
                newFood={food}
                onIncreaseFood={onIncreaseFood}
                onDecreaseFood={onDecreaseFood}
              />
            ) : (
              <button
                className="food-add-button"
                type="button"
                value={foodId}
                onClick={onClickAdd}
              >
                Add
              </button>
            )}
          </>
        )
      }}
    </CartContext.Consumer>
  )

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
    this.setState({foodList: newData})
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
      this.setState({foodList: newData})
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
    this.setState({foodList: updatedCartList})
  }

  saveLocalStorage = () => {
    const {foodList} = this.state
    localStorage.setItem('cartData', JSON.stringify(foodList))
  }

  onFoodCount = newCount => {
    if (newCount === 0) {
      this.setState({isClicked: false})
    }
  }

  addCartItem = food => {
    const {foodList} = this.state
    const foodObject = foodList.find(
      eachCartItem => eachCartItem.foodId === food.foodId,
    )

    if (foodObject) {
      this.setState(
        prevState => ({
          foodList: prevState.foodList.map(eachCartItem => {
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
      const updatedCartList = [...foodList, food]
      this.setState({foodList: updatedCartList}, () => {
        this.saveLocalStorage()
      })
    }
  }

  onClickAdd = () => {
    const {foodCount} = this.state
    const {food} = this.props
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
    this.addCartItem({food, foodCount})
  }

  onIncreaseFood = () => {
    const {food} = this.props
    const {foodId} = food
    this.incrementCartItemQuantity(foodId)
  }

  onDecreaseFood = () => {
    const {food} = this.props
    const {foodId} = food
    this.decrementCartItemQuantity(foodId)
  }

  addFoodButton = () => {
    const {food} = this.props
    const {isClicked} = this.state
    const {foodId} = food

    return (
      <>
        {isClicked ? (
          <Counter
            onFoodCount={this.onFoodCount}
            newFood={food}
            onIncreaseFood={this.onIncreaseFood}
            onDecreaseFood={this.onDecreaseFood}
          />
        ) : (
          <button
            className="food-add-button"
            type="button"
            value={foodId}
            onClick={this.onClickAdd}
          >
            Add
          </button>
        )}
      </>
    )
  } */

  render() {
    const {food} = this.props
    const {foodImageUrl, foodCost, foodName, rating} = food

    return (
      <>
        <li className="food-list-item-container" data-testid="foodItem">
          <div className="food-item-image-container">
            <img
              className="food-item-image"
              src={foodImageUrl}
              alt="foodItem"
            />
          </div>
          <div className="food-item-details-container">
            <h1 className="food-heading">{foodName}</h1>
            <div className="price-container">
              <BiRupee className="rupee-icon" />
              <p className="food-price">{foodCost}</p>
              <p className="food-price">.00</p>
            </div>
            <div className="food-rating-container">
              <BsStarFill className="food-rating-star" />
              <p className="food-rating">{rating}</p>
            </div>
            {this.addFoodButton()}
          </div>
        </li>
      </>
    )
  }
}

export default Food
