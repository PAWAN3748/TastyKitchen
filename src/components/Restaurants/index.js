import {Link} from 'react-router-dom'
import {BsFillStarFill} from 'react-icons/bs'

/* import {
  EachRestaurant,
  ResName,
  ResDetailsContainer,
  ResImageThumb,
  ResNameAndRatingContainer,
  ResCuisine,
  ResStar,
  StarAndRatingContainer,
  ResRating,
  ResImageContainer,
  LinkComponent,
} from './StyledComponents' */
import './index.css'

const Restaurants = props => {
  const {restaurant} = props
  const {name, rating, cuisine, imageUrl, restrauntId} = restaurant

  return (
    <>
      <Link to={`/restaurant/${restrauntId}`} className="link-component">
        <li className="each-restaurant" data-testid="restaurant-item">
          <div className="restaurant-details-container">
            <img className="restaurant-details-image" src={imageUrl} />
            <div className="res-name-rating-container">
              <h1 className="res-details-name">{name}</h1>
              <p className="res-details-cuisine">{cuisine}</p>
              <div className="res-star-rating-container">
                <BsFillStarFill className="res-star" />
                <p className="res-rating">{rating}</p>
              </div>
            </div>
          </div>
        </li>
      </Link>
    </>
  )
}

export default Restaurants
