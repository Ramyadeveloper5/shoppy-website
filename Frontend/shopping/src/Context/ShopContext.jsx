/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
// import all_product from '../Components/Assets/all_product';
import axios from 'axios';

// Shop Context
export const ShopContext = createContext(null);

// Empty Cart(Key:ProductId,Value:Quantity)
// const getEmptyCart = () => {
//     let cart = {};
//     for (let index = 0; index < all_product.length + 1; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }

// console.log(getEmptyCart, "Default Cart Value Shown")


// Shop Context Provider
const ShopContextProvider = (props) => {

    // Create UseState: Cart Functionality
    const [cartItems, setCartItems] = useState({})

    console.log(cartItems, "Cart Items Data")

    // Create UseState: User upload data that data stored in db, that db data view in ui

    const [all_product, setAll_product] = useState([]);

    const fetchData = async () => {
        try {

            // Owner add pandra data : Get
            const productResponse = await axios.get("http://localhost:5000/getallproducts");
            const products = productResponse.data;
            setAll_product(products);

            // Default Cart Value set(intial)
            const default_cart = {};
            products.forEach((product) => {
                // Cart value set default : 0
                default_cart[product._id] = 0
            })
            setCartItems(default_cart);

            // Get Cart Items

            if (localStorage.getItem("Token")) {
                const token = localStorage.getItem("Token");
                const config = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
                const cartResponse = await axios
                    .post("http://localhost:5000/getcartdata", {}, config)
                console.log(cartResponse, "Cart Response Data : Shop")
                setCartItems(cartResponse.data)
            }
        }
        catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    // Add to Cart Functionality
    const addToCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem("Token")) {
            const token = localStorage.getItem("Token");
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            // Create a abject id with itemId
            let dataId = { itemId }
            const cartResponse = await axios
                .post("http://localhost:5000/addtocart", dataId, config)
            console.log(cartResponse.data, "Add to cart Final Data")
        }
    }


    // Remove the Cart Functionality
    const removeFromCart = async(itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (localStorage.getItem("Token")) {
            const token = localStorage.getItem("Token");
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            // Create a abject id with itemId
            let dataId = { itemId }
            const cartResponse = await axios
                .post("http://localhost:5000/removetocart", dataId, config)
            console.log(cartResponse.data, "Remove Cart Final Data")
        }
    }
    console.log(removeFromCart, "Remove From Cart Value")

    // Total Cart Amount Functionality
    // const totalAmountCart = () => {
    //     let amount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = all_product.find((product) => {
    //                 product.id === Number(item)
    //                 amount += itemInfo.new_price * cartItems[item]
    //             })
    //         }

    //     }
    //     return amount;

    // }

    const totalAmountCart = () => {
        let amount = 0;
        Object.keys(cartItems).forEach((item) => {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product._id === item);
                if (itemInfo) {
                    amount += itemInfo.new_price * cartItems[item];
                }
            }
        });
        return amount;
    }

    console.log(totalAmountCart, "Total Amount Cart Value")

    // Cart Count shown in Navbar
    const cartCountValue = () => {
        let totalCartValue = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalCartValue += cartItems[item]
            }
        }
        return totalCartValue
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, totalAmountCart, cartCountValue };

    console.log(contextValue, "All Products Data")

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}

export default ShopContextProvider;