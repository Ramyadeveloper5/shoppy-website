/* eslint-disable react/prop-types */
import { useContext } from 'react'
import '../Pages/PagesCss/ProductCategoryPage.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
// import products from '../Components/Assets/all_product'



const ProductCategoryPage = (props) => {

  const { all_product } = useContext(ShopContext);

  console.log(all_product, "All Products")

  return (
    <div>
      {/* Show the Banner image of all the category */}
      <div className="product-category">
        <img className='product-category-imagebanner' src={props.banner} alt="Banner Image" />
        <div className='product-category-indexSort mt-2'>
          <p><span>Showcasing 1-12 </span>Out of 36 Products</p>
          <div className='product-category-sort'>
            Order by <img className='w-2 h-2 mt-2 ml-1' src={dropdown_icon} alt="Drop Down Icon" />
          </div>
        </div>
      </div>
      {/* Map all the category and display the image */}
      <div className='product-category-products'>
        {all_product?.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item key={i}
                id={item._id}
                productName={item.productName}
                productImage={item.productImage}
                new_price={item.new_price}
                old_price={item.old_price} />
            )
          }
          else {
            return null
          }
        })}
      </div>
      <div className="product-category-loadmore">
        Examine More
      </div>
    </div>
  )
}

export default ProductCategoryPage
