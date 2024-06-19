// Importing
const mongoose = require("mongoose");
const { v4 } = require("uuid")

// Product Schema Creation
const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: v4
    },
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productImage:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

// Product Schema Build and Exports
const Product = mongoose.model('Product', productSchema)
module.exports = { Product }