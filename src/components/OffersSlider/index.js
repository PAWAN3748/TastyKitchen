import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import OfferItem from '../OfferItem'
/* import {SlickSlider, SlideContainer} from './StyledComponents' */
import './index.css'

const OffersSlider = props => {
  const {sliderImagesList} = props
  // const {ImageUrl} = sliderImagesList
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    position: 'absolute',
    hover: true,
  }

  return (
    <>
      <li>
        <img
          src={sliderImagesList.imageUrl}
          alt="offer"
          className="offers-image"
        />
      </li>
    </>
  )
}

export default OffersSlider
