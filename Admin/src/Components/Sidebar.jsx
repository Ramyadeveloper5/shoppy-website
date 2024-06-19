import { Link } from 'react-router-dom';
import product_cart_icon from '../assets/Product_Cart.svg'
import product_list_icon from '../assets/Product_list_icon.svg'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to='/addproduct' style={{textDecoration:"none"}}>
                <div className='sidebar-items'>
                    <img src={product_cart_icon} alt="Product Logo" />
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to='/productlist' style={{textDecoration:"none"}}>
                <div className='sidebar-items'>
                    <img src={product_list_icon} alt="Product List" />
                    <p>Product List</p>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar
