import './index.css'

const OfferItem = props => {
  const {offerDetails} = props
  const {imageUrl} = offerDetails

  return (
    <div className="offers-container">
      <img src={imageUrl} alt="offer" className="offers-image" />
    </div>
  )
}

export default OfferItem
