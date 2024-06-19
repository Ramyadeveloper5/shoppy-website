import navbar_logo from '../assets/navbar-logo.png';
import navbar_profile from '../assets/navbar_image.jpg'
import '../Components/css/Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navbar_logo} alt="Navbar logo" className='navbar-logo' />
      <img src={navbar_profile} alt="Navbar Image" className='navbar-profile' />
    </div>
  )
}

export default Navbar
