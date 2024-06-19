import '../Footer/Footer.css'
import fotter_logo from '../Assets/lo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whtsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        {/* Footer Logo */}
        <div className='footer-logo'>
          <img src={fotter_logo} alt="Footer Logo" />
          <p>SHOPPY</p>
        </div>
        {/* Footer list */}
        <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* Social Media */}
        <div className="footer-socialmedia-icon">
          <div className="footer-socialmedia-container">
            <img src={instagram_icon} alt="Instagram Icon" />
          </div>
          <div className="footer-socialmedia-container">
            <img src={pinterest_icon} alt="Pinterest Icon" />
          </div>
          <div className="footer-socialmedia-container">
            <img src={whtsapp_icon} alt="Whtsapp Icon" />
          </div>
        </div>
        <div className="footer-copyrights">
          <hr />
          <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
