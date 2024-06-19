// Importing
const express = require("express");
const router = express.Router();
const fileUpload = require('../Middlewares/fileUpload')
const ProductController = require('../Controllers/product.controller')
const UserController = require('../Controllers/user.register.login.controller');
const {verify_auth} = require('../Middlewares/Auth');

// Api

// File Uploading
router.route("/fileupload").post(fileUpload.upload.single("product"),ProductController.productImageUploading);

// // Create Product
router.route("/createproduct").post(ProductController.createProduct);

// Delete Product
router.route("/deleteproduct/:id").delete(ProductController.deleteProduct);

// Get All Product
router.route("/getallproducts").get(ProductController.getAllProduct);

// User Create
router.route("/usercreate").post(UserController.user_create_service);

// Login 
router.route("/logintokencreate").post(UserController.login_verify)

// Verify Auth Token
router.route("/verifyauth").get(verify_auth,UserController.login_verify_token)

// Get All Collection Products in Shop Page
router.route("/newcollections").get(ProductController.getCollection)

// Get Well Liked Products in Shop Page
router.route("/likedproducts").get(ProductController.popularProducts)

// Get Related Products in Category Page(men,women,kid)
router.route("/relatedproducts").get(ProductController.relatedProducts)

// Cart Items
router.route("/addtocart").post(verify_auth,ProductController.addCartItems)

// Remove Items
router.route("/removetocart").post(verify_auth,ProductController.removeCartItems)

// Get Items
router.route("/getcartdata").post(verify_auth,ProductController.displayCartItems)

module.exports = {router}