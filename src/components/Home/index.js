import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import {Slider} from 'react-slick'

import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsFilterLeft, BsChevronLeft, BsChevronRight} from 'react-icons/bs'

import Header from '../Header'
import Restaurants from '../Restaurants'
import Footer from '../Footer'
import './index.css'

import OffersSlider from '../OffersSlider'

const slackApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

const restaurantApiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
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

class Home extends Component {
  state = {
    slackApiStatus: slackApiStatusConstants.initial,
    slackData: [],
    restaurantData: [],
    selectedSortByValue: sortByOptions[1].value,
    restaurantApiStatus: restaurantApiStatusConstants.initial,
    activePage: 1,
    searchInput: '',
  }

  onClickLeftArrow = () => {
    const {activePage} = this.state
    if (activePage !== 1) {
      this.setState(
        prevState => ({
          activePage: prevState.activePage - 1,
        }),
        this.getRestaurantData,
      )
    }
  }

  onClickRightArrow = () => {
    this.setState(
      prevState => ({
        activePage: prevState.activePage + 1,
      }),
      this.getRestaurantData,
    )
  }

  componentDidMount = () => {
    this.getSlackImages()
    this.getRestaurantData()
  }

  changeSortBy = selectedSortByValue => {
    this.setState({selectedSortByValue}, this.getRestaurantData)
  }

  onChangeSort = event => {
    this.changeSortBy(event.target.value)
    // console.log(event.target.value)
  }

  getSlackImages = async () => {
    this.setState({slackApiStatus: slackApiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const slackApiUrl = 'https://apis.ccbp.in/restaurants-list/offers'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(slackApiUrl, options)
    const fetchData = await response.json()
    if (response.ok) {
      const updatedData = fetchData.offers.map(each => ({
        id: each.id,
        imageUrl: each.image_url,
      }))
      this.setState({
        slackData: updatedData,
        slackApiStatus: slackApiStatusConstants.success,
      })
    } else {
      this.setState({
        slackApiStatus: slackApiStatusConstants.failure,
      })
    }
  }

  getRestaurantData = async () => {
    this.setState({
      restaurantApiStatus: restaurantApiStatusConstants.inProgress,
    })
    const LIMIT = 9
    const {activePage} = this.state
    const offset = (activePage - 1) * LIMIT
    const {searchInput, selectedSortByValue} = this.state

    console.log('activePage:', activePage, 'select:', selectedSortByValue)

    const jwtToken = Cookies.get('jwt_token')
    const RestaurantApiUrl = `https://apis.ccbp.in/restaurants-list?search=${searchInput}&offset=${offset}&limit=${LIMIT}&sort_by_rating=${selectedSortByValue}`
    // https://apis.ccbp.in/restaurants-list?search=hotel&offset=0&limit=9&sort_by_rating=Lowest
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(RestaurantApiUrl, options)
    const fetchData = await response.json()
    // console.log(fetchData)
    if (response.ok) {
      const updatedData = fetchData.restaurants.map(each => ({
        costForTwo: each.cost_for_two,
        cuisine: each.cuisine,
        groupByTime: each.group_by_time,
        hasOnlineDelivery: each.has_online_delivery,
        hasTableBooking: each.has_table_booking,
        restrauntId: each.id,
        imageUrl: each.image_url,
        isDeliveringNow: each.is_delivering_now,
        location: each.location,
        menuType: each.menu_type,
        name: each.name,
        opensAt: each.opens_at,
        rating: each.user_rating.rating,
        ratingColor: each.user_rating.rating_color,
        ratingText: each.user_rating.rating_text,
        totalReviews: each.user_rating.total_reviews,
      }))

      this.setState({
        restaurantApiStatus: restaurantApiStatusConstants.success,
        restaurantData: updatedData,
      })
    } else {
      this.setState({restaurantApiStatus: restaurantApiStatusConstants.failure})
    }
  }

  renderSlackSuccessView = () => {
    const {slackData} = this.state
    // console.log(slackData)
    return (
      <>
        <div className="slider-container">
          <OffersSlider sliderImagesList={slackData} />
        </div>
      </>
    )
  }

  renderSlackFailureView = () => {}

  renderSlackLoadingView = () => (
    <>
      <div data-testid="restaurants-offers-loader" className="loader-container">
        <Loader type="TailSpin" color="#F7931E" height="50" width="50" />
      </div>
    </>
  )

  slackSlideSection = () => {
    const {slackApiStatus} = this.state

    switch (slackApiStatus) {
      case restaurantApiStatusConstants.success:
        return this.renderSlackSuccessView()
      case restaurantApiStatusConstants.failure:
        return this.renderSlackFailureView()
      case restaurantApiStatusConstants.inProgress:
        return this.renderSlackLoadingView()
      default:
        return null
    }
  }

  renderRestaurantSuccessView = () => {
    const {restaurantData} = this.state

    return (
      <>
        <ul className="restaurant-list-container">
          {restaurantData.map(each => (
            <Restaurants restaurant={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  renderRestaurantFailureView = () => {}

  renderRestaurantLoadingView = () => (
    <>
      <div className="loader-container" data-testid="restaurants-list-loader">
        <Loader type="TailSpin" color="#F7931E" height="50" width="50" />
      </div>
    </>
  )

  renderRestaurantResult = () => {
    const {restaurantApiStatus} = this.state

    switch (restaurantApiStatus) {
      case restaurantApiStatusConstants.success:
        return this.renderRestaurantSuccessView()
      case restaurantApiStatusConstants.failure:
        return this.renderRestaurantFailureView()
      case restaurantApiStatusConstants.inProgress:
        return this.renderRestaurantLoadingView()
      default:
        return null
    }
  }

  render() {
    const {selectedSortByValue, activePage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <>
        <Header />
        {this.slackSlideSection()}
        <div className="main-container">
          <div className="all-restaurant-container">
            <h1 className="popular-res-heading">Popular Restaurants</h1>
            <div className="res-intro-sort-container">
              <p className="res-intro">
                Select Your favourite restaurant special dish and make your day
                happy...
              </p>
              <div className="sort-by-container">
                <BsFilterLeft className="sort-icon" />
                <p className="sort-by">Sort By</p>
                <select
                  className="sort-by-select"
                  onChange={this.onChangeSort}
                  value={selectedSortByValue}
                >
                  <option
                    className="sort-by-option"
                    value={sortByOptions[1].value}
                    selected
                  >
                    {sortByOptions[1].displayText}
                  </option>
                  <option
                    className="sort-by-option"
                    value={sortByOptions[0].value}
                  >
                    {sortByOptions[0].displayText}
                  </option>
                </select>
              </div>
            </div>
            <hr className="hr-line" />
            {this.renderRestaurantResult()}
            <div className="active-page-container">
              <div className="arrow-container">
                <button
                  className="arrow-button"
                  data-testid="pagination-left-button"
                  onClick={this.onClickLeftArrow}
                  type="submit"
                >
                  <BsChevronLeft className="left-arrow-icon" />
                </button>
              </div>
              <p
                className="active-page-number"
                data-testid="active-page-number"
              >
                {activePage}
              </p>
              <p className="active-page-number-text">of 4</p>
              <div className="arrow-container">
                <button
                  className="arrow-button"
                  onClick={this.onClickRightArrow}
                  type="submit"
                  data-testid="pagination-right-button"
                >
                  <BsChevronRight className="left-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
