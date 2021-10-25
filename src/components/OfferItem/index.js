import {Image, OffersContainer} from './styledComponents'

const OfferItem = props => {
  const {offerDetails} = props
  const {imageUrl} = offerDetails

  return (
    <OffersContainer>
      <Image src={imageUrl} alt="offer" />
    </OffersContainer>
  )
}

export default OfferItem
