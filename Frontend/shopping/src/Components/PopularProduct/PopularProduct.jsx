import './PopularProduct.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import axios from 'axios'

const PopularProduct = () => {

  // Use State

  const [likedProducts, setlikedProducts] = useState([]);

  // useEffect

  useEffect(() => {
    let likeProduct = async () => {
      await axios.get("http://localhost:5000/likedproducts")
        .then((response) => {
          setlikedProducts(response.data)
        })
        .catch((e) => { console.log(e) })
    }
    likeProduct()
  }, [])


  return (
    <div className='popular'>
      <h1>WELL LIKED BY WOMEN</h1>
      <hr />
      <div className='popular-women-item text-justify text-[15px]'>
        {likedProducts.map((item, i) => {
          return <Item
            key={i}
            id={item._id}
            productName={item.productName}
            productImage={item.productImage}
            new_price={item.new_price}
            old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default PopularProduct
