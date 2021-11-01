import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsStarFill} from 'react-icons/bs'
import {BiRupee} from 'react-icons/bi'

import Cookies from 'js-cookie'

import Header from '../Header'
import Footer from '../Footer'
import Food from '../Food'
import './index.css'

const restaurantApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class RestaurantDetails extends Component {
  state = {
    restaurantApiStatus: restaurantApiStatusConstants.initial,
    restaurantDetails: [],
    foodItemsDataList: [],
  }

  componentDidMount() {
    this.getRestaurantDetails()
  }

  updateRestaurantData = fetchData => ({
    costForTwo: fetchData.cost_for_two,
    cuisine: fetchData.cuisine,
    restrauntId: fetchData.id,
    imageUrl: fetchData.image_url,
    itemsCount: fetchData.items_count,
    location: fetchData.location,
    name: fetchData.name,
    opens_at: fetchData.opens_at,
    rating: fetchData.rating,
    reviewsCount: fetchData.reviews_count,
  })

  updateFoodItemsData = each => ({
    foodCost: each.cost,
    foodType: each.food_type,
    foodId: each.id,
    foodImageUrl: each.image_url,
    foodName: each.name,
    rating: each.rating,
  })

  getRestaurantDetails = async () => {
    this.setState({
      restaurantApiStatus: restaurantApiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {restrauntId} = params
    const restaurantApiUrl = `https://apis.ccbp.in/restaurants-list/${restrauntId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(restaurantApiUrl, options)
    const fetchData = await response.json()
    if (response.ok) {
      const restaurantData = this.updateRestaurantData(fetchData)
      const foodItemsData = fetchData.food_items.map(each =>
        this.updateFoodItemsData(each),
      )
      this.setState({
        restaurantApiStatus: restaurantApiStatusConstants.success,
        restaurantDetails: restaurantData,
        foodItemsDataList: foodItemsData,
      })
    } else {
      this.setState({restaurantApiStatus: restaurantApiStatusConstants.failure})
    }
  }

  renderFoodFailureView = () => {}

  renderFoodLoadingView = () => (
    <>
      <div
        className="res-loader-container"
        data-testid="restaurant-details-loader"
      >
        <Loader type="TailSpin" color="#F7931E" height="50" width="50" />
      </div>
    </>
  )

  renderFoodSuccessView = () => {
    const {foodItemsDataList} = this.state

    return (
      <>
        <ul
          className="food-details-container"
          testid="restaurant-details-loader"
        >
          {foodItemsDataList.map(food => (
            <Food food={food} key={food.foodId} />
          ))}
        </ul>
      </>
    )
  }

  renderFoodItems = () => {
    const {restaurantApiStatus} = this.state
    switch (restaurantApiStatus) {
      case restaurantApiStatusConstants.success:
        return this.renderFoodSuccessView()
      case restaurantApiStatusConstants.failure:
        return this.renderFoodFailureView()
      case restaurantApiStatusConstants.inProgress:
        return this.renderFoodLoadingView()
      default:
        return null
    }
  }

  render() {
    const {restaurantDetails, foodItemsDataList} = this.state

    const {
      imageUrl,
      name,
      reviewsCount,
      cuisine,
      location,
      rating,
      costForTwo,
    } = restaurantDetails
    return (
      <>
        <Header />
        <div className="res-item0bg-container" data-testid="restaurant-item">
          <div className="res-item-details-image-container">
            <img
              className="res-item-details-image"
              src={imageUrl}
              alt="restaurant"
            />
          </div>
          <div className="res-item-details-container">
            <h1 className="res-item-details-name">{name}</h1>
            <p className="res-item-details-cuisine">{cuisine}</p>
            <p className="res-item-details-location">{location}</p>
            <div className="res-item-details-rating-cost-container">
              <div className="ras-item-details-rating-container">
                <div className="res-item-details-star-container">
                  <BsStarFill className="res-item-details-star" />
                  <p className="res-item-details-rating">{rating}</p>
                </div>
                <p className="res-item-details-review-count">
                  {reviewsCount}+ Ratings
                </p>
              </div>
              <div className="res-item-details-cost-container">
                <div className="res-item-details-rupee-container">
                  <BiRupee className="res-item-details-rupee" />
                  <p className="res-item-details-cost-for-two">{costForTwo}</p>
                </div>
                <p className="res-item-details-cost-for-two-value">
                  Cost for two
                </p>
              </div>
            </div>
          </div>
        </div>
        {this.renderFoodItems()}
        <Footer />
      </>
    )
  }
}

export default RestaurantDetails
