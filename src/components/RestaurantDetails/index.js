import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import Footer from '../Footer'
import Food from '../Food'
import {
  ResItemBgContainer,
  ResItemImageContainer,
  ResItemImage,
  ResItemDetailsContainer,
  ResItemName,
  ResItemCuisine,
  Location,
  RatingStar,
  RatingAndCostContainer,
  RatingContainer,
  ResRating,
  StarContainer,
  ReviewsCount,
  CostContainer,
  RupeeContainer,
  Rupee,
  Cost,
  CostForTwo,
  FoodDetailsContainer,
  ResLoaderContainer,
} from './StyledComponents'

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
    // console.log(fetchData)
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
      <ResLoaderContainer testid="loader">
        <Loader type="TailSpin" color="#F7931E" height="50" width="50" />
      </ResLoaderContainer>
    </>
  )

  renderFoodSuccessView = () => {
    const {foodItemsDataList} = this.state

    return (
      <>
        <FoodDetailsContainer data-testid="restaurant-details-loader">
          {foodItemsDataList.map(food => (
            <Food food={food} key={food.id} />
          ))}
        </FoodDetailsContainer>
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
    const {restaurantDetails} = this.state
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
        <ResItemBgContainer>
          <ResItemImageContainer>
            <ResItemImage src={imageUrl} />
          </ResItemImageContainer>
          <ResItemDetailsContainer>
            <ResItemName>{name}</ResItemName>
            <ResItemCuisine>{cuisine}</ResItemCuisine>
            <Location>{location}</Location>
            <RatingAndCostContainer>
              <RatingContainer>
                <StarContainer>
                  <RatingStar />
                  <ResRating>{rating}</ResRating>
                </StarContainer>
                <ReviewsCount>{reviewsCount}+ Ratings</ReviewsCount>
              </RatingContainer>
              <CostContainer>
                <RupeeContainer>
                  <Rupee />
                  <Cost>{costForTwo}</Cost>
                </RupeeContainer>
                <CostForTwo>Cost for two</CostForTwo>
              </CostContainer>
            </RatingAndCostContainer>
          </ResItemDetailsContainer>
        </ResItemBgContainer>
        {this.renderFoodItems()}
        <Footer />
      </>
    )
  }
}

export default RestaurantDetails
