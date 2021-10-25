import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import OfferItem from '../OfferItem'
import {SlickSlider, SlideContainer} from './StyledComponents'

const OffersSlider = props => {
  const {sliderImagesList} = props
  const {ImageUrl} = sliderImagesList
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    position: 'absolute',
    hover: true,
  }

  return (
      <SlideContainer data-testid="restaurants-list-loader">
<SlickSlider {...settings}>
      {sliderImagesList.map(eachSlid => (
        <OfferItem key={eachSlid.id} offerDetails={eachSlid} />
      ))}
    </SlickSlider>
      </SlideContainer>
    
  )
}

export default OffersSlider
