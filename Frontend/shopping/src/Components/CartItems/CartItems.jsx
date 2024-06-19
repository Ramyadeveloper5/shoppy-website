import '../CartItems/CartItems.css'
// import ShopContext from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


const CartItems = () => {

    // Use Context for Cart
    const { all_product, cartItems, removeFromCart, totalAmountCart } = useContext(ShopContext)

    // console.log(all_product)
   console.log(cartItems,"Cart Items")
    // console.log(removeFromCart)

    return (
        <div>
            <div className="cart-items">
                {/* Cart Items Detail */}
                <div className="cart-items-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                <div>
                    {/* Individual Cart Item Detail */}
                    {all_product?.map((singleItem) => {
                        if (cartItems[singleItem._id] > 0) {
                            return (
                                <>
                                    <div className="cart-items-format cart-items-main">
                                        <img src={singleItem.productImage} alt="" className='carticon-producticon' />
                                        {/* Product Name */}
                                        <p>{singleItem.productName}</p>
                                        {/* Products New Price */}
                                        <p>${singleItem.new_price}</p>
                                        {/* Display Product Quatity */}
                                        <button className='cart-items-quantity'>{cartItems[singleItem._id]}</button>
                                        {/* Total Value of indivudual Item :Quanitity multiply by price */}
                                        <p>${singleItem.new_price * cartItems[singleItem._id]}</p>
                                        {/* Remove Icon */}
                                        <img className='carticons-removeicon' src={remove_icon} onClick={() => { removeFromCart(singleItem._id) }} alt="Remove Icon" />
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                        else {
                            return null;
                        }
                    })}
                    <div className="cart-items-down">
                        <div className="cart-items-total">
                            {/* Cart Total  */}
                            <h1>Cart Totals</h1>
                            <div>
                                <div className="cart-items-total-item">
                                    {/* SubTotal */}
                                    <p>Subtotal</p>
                                    {/* Show Total Cart Value */}
                                    <p>${totalAmountCart()}</p>
                                </div>
                                <hr />
                                <div className='cart-items-total-item'>
                                    {/* Shipping Fee  */}
                                    <p>Shipping Fee</p>
                                    {/* Free */}
                                    <p>Free</p>
                                </div>
                                <hr />
                                <div className='cart-items-total-item'>
                                    {/* Total Item */}
                                    <h3>Total</h3>
                                    {/* Total Item Cart Value Display */}
                                    <h3>${totalAmountCart()}</h3>
                                </div>
                            </div>
                            <button>PROCEED TO CHECKOUT</button>
                        </div>
                        <div className="cart-items-promocode">
                            <p>If you have a Promo Code, Enter it here</p>
                            <div className="cart-items-promobox">
                                <input type="text" placeholder='Promo Code' />
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
