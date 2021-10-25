import {Component} from 'react'
import {
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
} from './StyledComponents'
import Counter from '../Counter'
import CartContext from '../../context/CartContext'

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
              <FoodAddButton type="button" value={foodId} onClick={onClickAdd}>
                ADD
              </FoodAddButton>
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
        <FoodListItemContainer>
          <FoodItemImageContainer>
            <FoodItemImage src={foodImageUrl} alt="foodItem" />
          </FoodItemImageContainer>
          <FoodItemDetailsContainer>
            <FoodHeading>{foodName}</FoodHeading>
            <PriceContainer>
              <Rupee />
              <FoodPrice>{foodCost}.00</FoodPrice>
            </PriceContainer>
            <FoodRatingContainer>
              <RatingStar />
              <FoodRating>{rating}</FoodRating>
            </FoodRatingContainer>
            {this.addFoodButton()}
          </FoodItemDetailsContainer>
        </FoodListItemContainer>
      </>
    )
  }
}

export default Food
