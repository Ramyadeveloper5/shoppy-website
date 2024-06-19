import '../RelatedProducts/RelatedProducts.css'
import Item from '../Item/Item'
import { useEffect, useState } from 'react'
import axios from 'axios'

const RelatedProducts = () => {

  //  UseState

  const [relatedProducts, setRelatedProducts] = useState([]);

  // UseEffect

  useEffect(() => {
    try {
      let relatedProducts = async () => {
        await axios.get("http://localhost:5000/relatedproducts")
          .then((response) => {
            setRelatedProducts(response.data)
          })
      }
      relatedProducts()
    }
    catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <div>
      <div className="related-products">
        <h1>𝕽𝖊𝖑𝖆𝖙𝖊𝖉 𝕻𝖗𝖔𝖉𝖚𝖈𝖙𝖘</h1>
        <hr />
        <div className="related-products-item">
          {relatedProducts?.map((item, i) => {
            return (
              <Item
                key={i}
                id={item._id}
                productName={item.productName}
                productImage={item.productImage}
                new_price={item.new_price}
                old_price={item.old_price} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default RelatedProducts
