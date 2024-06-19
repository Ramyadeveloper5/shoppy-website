import '../Hero/Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
 import hero_image from '../Assets/ex.jpg'

const Hero = () => {
  return (
    <div className='shop-hero'>
        {/* Left Section */}
      <div className='shop-hero-left'>
        <h2>NEW TRENDS</h2>
        <div>
            <div className='hand-icon'>
                <p>N€W</p>
                <img src={hand_icon} alt="Hand Icon" />
            </div>
            <p>Collection</p>
            <p>for all of us.</p>
        </div>
        <div className='shop-hero-btn'>
            <div>Latest Choices</div>
            <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>
      {/* Right Section */}
      <div className='shop-hero-right'>
            <img src={hero_image} alt="Exclusive Image" />
      </div>
    </div>
  )
}

export default Hero
