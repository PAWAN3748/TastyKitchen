import styled from 'styled-components'
import Slider from 'react-slick'

export const SlideContainer = styled.div`
`

export const SlickSlider = styled(Slider)`
  .slick-dots {
    top: 220px;
    height: 30px;
  }
  @media screen and (min-width: 768px) {
    .slick-dots {
      top: 250px;
    }
  }

  .slick-slide img {
    width: 90vw !important;
  }
`
