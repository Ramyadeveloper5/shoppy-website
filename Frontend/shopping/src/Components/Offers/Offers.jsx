import '../Offers/Offers.css'
// import exclusive_image from '../Assets/exclusive_image1.png'
import exclusive_image from '../Assets/exclusive.jpg'

const Offers = () => {
  return (
    <div>
      <div className='offers'>
            <div className="offers-left">
                <h1>£X¢Lu$!v€</h1>
                <h1>Offers Relevant to You</h1>
                <p>ONLY ON THE BEST SELLER PRODUCTS</p>
                <button>CHECK NOW</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="Exclusive Image" />
            </div>
      </div>
    </div>
  )
}

export default Offers
