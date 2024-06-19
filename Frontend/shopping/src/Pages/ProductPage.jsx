// import all_product from '../Components/Assets/all_product'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const ProductPage = () => {

  // Product Id :UseParams Hooks
  const {id} = useParams();

  console.log(id,"product Id")
  const { all_product } = useContext(ShopContext);

  console.log(all_product, "Product")

  const product = all_product.find((productData)=>{return (productData._id === id)})

  console.log(product,"Product Id Shown")
  
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <ProductDescription/>
      <RelatedProducts/>
    </div>
  )
}

export default ProductPage
