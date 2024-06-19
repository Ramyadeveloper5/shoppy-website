const { Product } = require("../Models/products");
const { userModel } = require('../Models/user');

// Create Product 
const createProduct = async (req) => {
    let data = await Product.create(req.body);
    return data
}

// Delete Product
const deleteProduct = async (req) => {
    let id = req.params.id;
    console.log(id, "Product Id")
    let findProducts = await Product.findById(id);
    if (!findProducts) {
        return ("Product Not Available")
    }
    else {
        let deletePro = await Product.findByIdAndDelete({ _id: id }, req.body, { new: true })
        return deletePro
    }
}

// Get All Products

const getAllProducts = async (req) => {
    let findAllProduct = await Product.find();
    if (!findAllProduct) {
        return ("No Products Available")
    }
    else {
        return findAllProduct
    }
}

// Get New Collection Products

const getAllCollections = async (req) => {
    try {
        // All Product Get
        let products = await Product.find({})
        // Random Product Choose
        let newCollection = products.slice(1).slice(-8)
        return newCollection
    }
    catch (e) {
        console.error(e)
    }

}

// Get Well Liked Products

const wellLikedProducts = async (req) => {
    try {
        let likedProducts = await Product.find({ category: "women" })
        let getLikeProducts = await likedProducts.slice(0, 4)
        return getLikeProducts
    }
    catch (e) {
        console.error(e)
    }
}

// Get all the Related Products in Category(kid,men,women)

const relatedProducts = async (req) => {
    try {
        const relatedProduct = await Product.find({ category: "relatedproduct" })
        let relatedProducts = await relatedProduct.slice(0, 4)
        return relatedProducts
    }
    catch (e) {
        console.error(e)
    }
}

// Add to Cart : User Purpose

const addCart = async (req) => {
    try {
        // Get Id only
        const { userId } = req;
        let data = req.body;
        // User Found
        let userData = await userModel.findOne({ _id: userId })
        // Add Data into CartItems
        userData.cartData[data.itemId] += 1
        // Add Cart Data into Each User
        let updateUserCart = await userModel.findOneAndUpdate({ _id: userId }, { cartData: userData.cartData })
        return updateUserCart
    }
    catch (e) {
        console.error(e)
    }
}

// Remove to Cart : User Purpose

const removeCart = async (req) => {
    try {
        // Get Id only
        const { userId } = req;
        let data = req.body;
        // User Found
        let userData = await userModel.findOne({ _id: userId })
        // Add Data into CartItems
        if (userData.cartData[data.itemId] > 0)
            userData.cartData[data.itemId] -= 1
        // Add Cart Data into Each User
        let removeUserCart = await userModel.findOneAndUpdate({ _id: userId }, { cartData: userData.cartData })
        return removeUserCart
    }
    catch (e) {
        console.error(e)
    }
}

// Display Cart Items : User Purpose

const getAllCartItems = async (req) => {
    try {
        // Get Id only
        const { userId } = req;
        let data = req.body;
        // User Found
        let userData = await userModel.findOne({ _id: userId })
        if(userData){
            return userData.cartData
        }
        else{
            return console.log("No Cart Items")
        }
    }
    catch (e) {
        console.error(e)
    }
}

module.exports = {
    createProduct,
    deleteProduct,
    getAllProducts,
    getAllCollections,
    wellLikedProducts,
    relatedProducts,
    addCart,
    removeCart,
    getAllCartItems
}