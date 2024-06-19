const productService = require("../Services/product.service")



// File Uploading
const productImageUploading = async (req, res) => {
    res.json({
        success: 1,
        imageUrl: `http://localhost:5000/${req.file.filename}`
    })
}

// Product Create
const createProduct = async (req, res) => {
    let data = await productService.createProduct(req)
    res.send(data)
}

// Product Delete
const deleteProduct = async (req, res) => {
    let deleteData = await productService.deleteProduct(req)
    res.json({
        success: true,
        name: deleteData.productName
    })
}

// Get All Product
const getAllProduct = async (req, res) => {
    let getProduct = await productService.getAllProducts(req);
    res.send(getProduct)
}

// Get All Collection

const getCollection = async (req, res) => {
    let collectionProducts = await productService.getAllCollections(req);
    res.send(collectionProducts)
}

// Get Well Liked Products

const popularProducts = async (req, res) => {
    let likeProducts = await productService.wellLikedProducts(req);
    res.send(likeProducts)
}

// Get Related Products

const relatedProducts = async (req, res) => {
    let relatedProducts = await productService.relatedProducts(req)
    res.send(relatedProducts)
}

// Add to cart Items : User

const addCartItems = async(req,res)=>{
    let cartItems = await productService.addCart(req)
    res.send(cartItems)
}

// Remove to cart Items :User

const removeCartItems = async(req,res)=>{
    let removeItems = await productService.removeCart(req)
    res.send(removeItems)
}

// Display Cart Items : User

const displayCartItems = async(req,res)=>{
    let getAllItems = await productService.getAllCartItems(req)
    res.send(getAllItems)
}


    module.exports = {
        productImageUploading,
        createProduct,
        deleteProduct,
        getAllProduct,
        getCollection,
        popularProducts,
        relatedProducts,
        addCartItems,
        removeCartItems,
        displayCartItems
    }