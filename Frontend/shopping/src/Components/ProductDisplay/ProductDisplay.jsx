/* eslint-disable react/prop-types */
import '../ProductDisplay/ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {

    const { product } = props;
    
    // UseContext for Cart Functionality
    const {addToCart} = useContext(ShopContext);
    
    return (
        <div>
            {/* Single Product Image Display */}
            <div className="product-display">
                <div className="product-display-left">
                    <div className="product-display-img-list">
                        <img src={product.productImage} alt=""/>
                        <img src={product.productImage} alt="" />
                        <img src={product.productImage} alt="" />
                        <img src={product.productImage} alt="" />
                    </div>
                    <div className="product-display-img">
                        <img className='product-display-main_image' src={product.productImage} alt="" />
                    </div>
                </div>
                <div className="product-display-right">
                    <h1>{product.name}</h1>
                    <div className="product-display-right-stars">
                        <img src={star_icon} alt="Star Icon" />
                        <img src={star_icon} alt="Star Icon" />
                        <img src={star_icon} alt="Star Icon" />
                        <img src={star_icon} alt="Star Icon" />
                        <img src={star_dull_icon} alt="Star Dull Icon" />
                        <p>(155)</p>
                    </div>
                    <div className="product-display-right-prices">
                        <div className="product-display-right-price-old">
                            ${product.old_price}
                        </div>
                        <div className="product-display-right-prices-new">
                            ${product.new_price}
                        </div>
                    </div>
                    <div className='product-display-right-productDescription'>
                        The most famous of T-shirts styles are crew necks, also known as classic T-shirts. These are T-shirts with a round circular neck. They provide excellent flexibility, and fit comfortably on your body giving you a toned appearance.
                    </div>
                    <div className='product-display-right-size'>
                        <h1>Select Size</h1>
                        <div className='product-display-right-sizes'>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={()=>{addToCart(product._id)}}>ADD TO CART</button>
                    <p className='product-display-right-category'>
                        <span>Category : </span>Men, T-Shirt,
                    </p>
                    <p className='product-display-right-category'>
                        <span>Tags : </span>Modern, Latest,
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductDisplay
