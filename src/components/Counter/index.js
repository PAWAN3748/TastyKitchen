import {Component} from 'react'
import {AddOrSubContainer, AddOrSbButton, FoodCount} from './StyledComponents'
import CartContext from '../../context/CartContext'

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
            <AddOrSbButton
              type="button"
              data-testid="decrement-count"
              onClick={onDecrement}
            >
              -
            </AddOrSbButton>
            <FoodCount data-testid="active-count">{foodCount}</FoodCount>
            <AddOrSbButton
              type="button"
              onClick={onIncrement}
              data-testid="increment-count"
            >
              +
            </AddOrSbButton>
          </>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    const {foodCount} = this.state
    const {onFoodCount, onIncreaseFood} = this.props
    onFoodCount(foodCount)
    return <AddOrSubContainer>{this.incrementAndDecrement()}</AddOrSubContainer>
  }
}

export default Counter
