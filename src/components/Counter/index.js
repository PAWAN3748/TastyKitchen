import {Component} from 'react'
// import CartContext from '../../context/CartContext'
import './index.css'

class Counter extends Component {
  state = {
    foodCount: 1,
  }

  /* incrementAndDecrement = () => (
    <CartContext.Consumer>
      {() => {
        const {onIncreaseFood, onDecreaseFood} = this.props

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
              data-testid="decrement-count"
              onClick={onDecrement}
            >
              -
            </button>
            <p className="counter-food-count" data-testid="active-count">
              {foodCount}
            </p>
            <button
              className="add-Sub-button"
              type="button"
              onClick={onIncrement}
              data-testid="increment-count"
            >
              +
            </button>
          </>
        )
      }}
    </CartContext.Consumer>
  ) */

  onDecrement = () => {
    const {foodCount} = this.state
    if (foodCount > 0) {
      this.setState(
        prevState => ({foodCount: prevState.foodCount - 1}),
        () => {
          const {onDecreaseFood} = this.props
          onDecreaseFood(foodCount)
        },
      )
    }
  }

  onIncrement = () => {
    this.setState(
      prevState => ({
        foodCount: prevState.foodCount + 1,
      }),
      () => {
        const {foodCount} = this.state
        const {onIncreaseFood} = this.props
        onIncreaseFood(foodCount)
      },
    )
  }

  incrementAndDecrement = () => {
    const {foodCount} = this.state

    return (
      <>
        <button
          className="add-Sub-button"
          type="button"
          data-testid="decrement-count"
          onClick={this.onDecrement}
        >
          -
        </button>
        <p className="counter-food-count" data-testid="active-count">
          {foodCount}
        </p>
        <button
          className="add-Sub-button"
          type="button"
          onClick={this.onIncrement}
          data-testid="increment-count"
        >
          +
        </button>
      </>
    )
  }

  render() {
    const {foodCount} = this.state
    const {onFoodCount} = this.props
    onFoodCount(foodCount)
    return (
      <div className="add-sub-container">{this.incrementAndDecrement()}</div>
    )
  }
}

export default Counter
