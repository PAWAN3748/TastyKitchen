import {Component} from 'react'
import {AddOrSubContainer, AddOrSbButton, FoodCount} from './StyledComponents'
import CartContext from '../../context/CartContext'
import './index.css'

class Counter extends Component {
  state = {
    foodCount: 1,
  }

  incrementAndDecrement = () => (
    <CartContext.Consumer>
      {value => {
        const {addCartItem} = value
        const {newFood, onIncreaseFood, onDecreaseFood} = this.props

        /* const onCount = () => {
          const {foodCount} = this.state
          onIncreaseFood(foodCount)
           console.log(foodCount)
        } */

        const onIncrement = () => {
          this.setState(
            prevState => ({
              foodCount: prevState.foodCount + 1,
            }),
            () => {
              const {foodCount} = this.state
              onIncreaseFood(foodCount)
            },
          )
        }

        const onDecrement = () => {
          const {foodCount} = this.state
          if (foodCount > 0) {
            this.setState(
              prevState => ({foodCount: prevState.foodCount - 1}),
              () => {
                onDecreaseFood(foodCount)
              },
            )
          }
        }

        const {foodCount} = this.state

        return (
          <>
            <button
              className="add-Sub-button"
              type="button"
              testid="decrement-count"
              onClick={onDecrement}
            >
              -
            </button>
            <p className="counter-food-count" testid="active-count">
              {foodCount}
            </p>
            <button
              className="add-Sub-button"
              type="button"
              onClick={onIncrement}
              testid="increment-count"
            >
              +
            </button>
          </>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    const {foodCount} = this.state
    const {onFoodCount, onIncreaseFood} = this.props
    onFoodCount(foodCount)
    return (
      <div className="add-sub-container">{this.incrementAndDecrement()}</div>
    )
  }
}

export default Counter
