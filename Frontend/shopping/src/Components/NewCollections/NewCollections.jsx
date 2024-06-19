import "../NewCollections/NewCollections.css"
import Item from "../Item/Item"
import { useEffect, useState } from "react"
import axios from 'axios'


const NewCollections = () => {

    // 
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        const collectionData = async () => {
            await axios.get("http://localhost:5000/newcollections")
                .then((response) => {
                    console.log(response.data, "All Collection Data")
                    setCollection(response.data)
                })
                .catch((e) => { console.error(e) })
        }
        collectionData()
    }, [])


    return (
        <div>
            <div className="new-collections-product">
                <h1>ℕ𝓔𝔀 ℂ𝕆𝕃𝕃𝔼ℂ𝕋𝕀𝕆ℕ</h1>
                <hr />
                <div className="collections">
                    {collection?.map((item, i) => {
                        return <Item key={i}
                            id={item._id}
                            productName={item.productName}
                            productImage={item.productImage}
                            new_price={item.new_price}
                            old_price={item.old_price} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default NewCollections
