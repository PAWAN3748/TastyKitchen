import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'

import './index.css'

const Restaurants = props => {
  const {restaurant} = props
  const {
    name,
    rating,
    cuisine,
    imageUrl,
    totalReviews,
    restrauntId,
  } = restaurant

  return (
    <>
      <Link to={`/restaurant/${restrauntId}`} className="link-component">
        <li className="each-restaurant" data-testid="restaurant-item">
          <div className="restaurant-details-container">
            <img
              className="restaurant-details-image"
              src={imageUrl}
              alt="restaurant"
            />
            <div className="res-name-rating-container">
              <h1 className="res-details-name">{name}</h1>
              <p className="res-details-cuisine">{cuisine}</p>
              <div className="res-star-rating-container">
                <BsFillStarFill className="res-star" />
                <p className="res-rating">{rating}</p>
                <h1 className="res-total-reviews-text-container">
                  ({totalReviews} ratings)
                </h1>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default Restaurants
