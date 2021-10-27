import {Component} from 'react'
import {BiRupee} from 'react-icons/bi'
import {BsStarFill} from 'react-icons/bs'

/* import {
  FoodListItemContainer,
  FoodItemImageContainer,
  FoodItemImage,
  FoodItemDetailsContainer,
  FoodHeading,
  FoodPrice,
  RatingStar,
  FoodRatingContainer,
  FoodRating,
  FoodAddButton,
  Rupee,
  PriceContainer,
} from './StyledComponents' */

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
          saveLocalStorage,
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
                ADD
              </button>
            )}
          </>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    const {food} = this.props
    const {foodImageUrl, foodCost, foodType, foodId, foodName, rating} = food

    const {isClicked} = this.state

    return (
      <>
        <li className="food-list-item-container" testid="foodItem">
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
              <p className="food-price">{foodCost}.00</p>
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
