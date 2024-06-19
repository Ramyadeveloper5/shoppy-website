const mongoose = require('mongoose');
const {v4} = require('uuid');

// Schema Creation
const schemaUser = new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    username:{
        type:String,
        trim:true,
        required:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true
    },
    phonenumber:{
        type:Number,
        trim:true,
        required:true
    },
    profilePic:{
        type:String,
    },
    cartData:{
        type:Object,
        default:{}
    },
    address:{
        type:String,
        trim:true,
    },
    active:{
        type:Boolean,
        default:true
    }
},{timestamps:true});

// Model Creation User
const userModel = mongoose.model("userdata",schemaUser);

// Model Exporting
module.exports = {userModel};