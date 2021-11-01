import './index.css'

const OfferItem = props => {
  const {offerDetails} = props
  const {imageUrl} = offerDetails

  return (
    <li className="offers-container">
      <img src={imageUrl} alt="offer" className="offers-image" />
    </li>
  )
}

export default OfferItem
