import axios from "axios";
import { useEffect, useState } from "react"
import remove_icon from '../assets/cross_icon.png'
import './css/ProductList.css'

const ProductList = () => {

  const [productGet, setProductGet] = useState([]);

  // All product get
  const getProducts = async () => {
    await axios.get("http://localhost:5000/getallproducts")
      .then((res) => {
        setProductGet(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  };

  // useEffect :Used to Reload
  useEffect(() => {
    getProducts()
  }, [])

  // Remove Product Function
  const removeProduct = async (id)=>{
    await axios.delete(`http://localhost:5000/deleteproduct/${id}`)
    .then(()=>{
      getProducts();
    })
    .catch((er)=>{
      console.error(er)
    })
  };

  return (
    <div>
      <div className="product-list">
        <h1>ALL PRODUCT LIST</h1>
        <div className="product-list-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="product-list-allproductsget">
          <hr />
          {productGet.map((alldata) => {
            return (
              <div key={alldata._id}>
                <img src={alldata.productImage} alt="ProductImage" className="product-list-image-icon" />
                <p>{alldata.productName}</p>
                <p>{alldata.category}</p>
                <p>{alldata.new_price}</p>
                <p>{alldata.old_price}</p>
                <img
                  src={remove_icon}
                  alt="Remove Icon"
                  className="product-list-remove-icon"
                  onClick={()=>{removeProduct(alldata._id)}}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductList
