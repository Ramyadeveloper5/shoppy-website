import { useState } from "react"
import axios from "axios"
import upload_area from '../assets/upload_area.svg'
import '../Components/css/SingleAddProduct.css'

const SingleAddProduct = () => {

  // Image Set

  const [image, setImage] = useState(false);
  console.log(image, "Image Data")

  const [productDetail, setProductDetail] = useState({
    productName: "",
    productImage: "",
    category: "",
    new_price: "",
    old_price: ""
  })

  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }

  const changeHandler = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value })
  }

  const addProduct = async () => {
    try {
      const formData = new FormData()
      formData.append("product", image)
      // Image Upload url
      const response = await axios.post("http://localhost:5000/fileupload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response, "Respose Data")

      const { data } = response;

      console.log(data, "Data Taken");

      if (data.success) {
        const updateProductDetail = { ...productDetail, productImage: data.imageUrl };

        console.log(updateProductDetail, "Overall Data");

        await axios.post("http://localhost:5000/createproduct/", updateProductDetail)
          .then((res) => {
            if (res.data) {
              alert("Product Added")
            }
            else {
              alert("Failed to Upload Data")
            }
          });
      }
      else {
        console.error("Image Upload Failed")
      }
    }
    catch (error) {
      console.error("Uploading Image : ", error)
    }
  }


  return (
    <div>
      <div className="addproducts">
        <div className="addproduct-itemfield">
          <p>
            Product Title
          </p>
          <input type="text" value={productDetail.productName} onChange={changeHandler} name="productName" placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>
            Product Price
          </p>
          <input type="text" value={productDetail.old_price} onChange={changeHandler} name="old_price" placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>
            Offer Price
          </p>
          <input type="text" value={productDetail.new_price} onChange={changeHandler} name="new_price" placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>
            Product Category
          </p>
          <select name="category" value={productDetail.category} onChange={changeHandler} className="addproduct-selector">
            <option value="kids">Kids</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="relatedproduct">Related Products</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="File-input">
            <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className="addproduct-thumbnail-image" />
          </label>
          <input type="file" onChange={imageHandler} name="image" id="File-input" />
        </div>
        <button className="addproduct-button" onClick={() => { addProduct() }}>
          ADD
        </button>
      </div>
    </div>
  )
}

export default SingleAddProduct
