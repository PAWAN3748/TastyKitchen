import {
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
} from './StyledComponents'

const Restaurants = props => {
  const {restaurant} = props
  const {name, rating, cuisine, imageUrl, restrauntId} = restaurant

  return (
    <>
      <LinkComponent to={`/restaurants/${restrauntId}`}>
        <EachRestaurant>
          <ResDetailsContainer>
            <ResImageThumb src={imageUrl} alt="restaurant" />
            <ResNameAndRatingContainer>
              <ResName>{name}</ResName>
              <ResCuisine>{cuisine}</ResCuisine>
              <StarAndRatingContainer>
                <ResStar />
                <ResRating>{rating}</ResRating>
              </StarAndRatingContainer>
            </ResNameAndRatingContainer>
          </ResDetailsContainer>
        </EachRestaurant>
      </LinkComponent>
    </>
  )
}

export default Restaurants
