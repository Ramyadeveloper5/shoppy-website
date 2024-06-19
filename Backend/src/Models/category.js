// Importing
const mongoose = require("mongoose");
const { v4 } = require("uuid")

// Category Schema Creation
const categorySchema = new mongoose.Schema({
    id: {
        type: String,
        default: v4
    },
    categoryName: {
        type: String,
        required: true,
        trim: true
    },
    categoryColor: {
        type: String,
    },
},{timestamps:true})




// Category Schema Build and Exports
const Category = mongoose.model('Category', categorySchema)
module.exports = { Category }