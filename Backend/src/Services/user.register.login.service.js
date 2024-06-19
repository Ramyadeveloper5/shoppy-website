// Package Importing
const {userModel} =require('../Models/user');
const {Product} = require('../Models/products');
const Bcrypt = require('bcryptjs');


// User Create Function
const userCreate = async(req)=>{
    const {email,password} = req.body;
    // salt and hash generation
    let salt = await Bcrypt.genSaltSync(15);
    let hash = await Bcrypt.hashSync(password ,salt);
    console.log(hash,"hash value");
    // user available or not
    let findEmail = await userModel.findOne({email:email});
    if(findEmail){
        return console.log("User Already Registered")
    }
    // add cart details:if user logout
    else{
        // get all the products
        let Products = await Product.find();
        // Cart Count
        const defaultCartCount = {}; 
        Products.forEach(pro=>{
            defaultCartCount[pro._id] = 0;
        })
        // user create
        let userCreate = await userModel.create({...req.body,...{password:hash},...{cartData:defaultCartCount}});
        return userCreate;
    };
}

// Login Endpoints

const loginCheck = async(req)=>{
    let {email,password} = req.body;
    let findEmail = await userModel.findOne({email:email});
    let compare = await Bcrypt.compare(password,findEmail.password);
    if(compare && findEmail !=null){
        return findEmail
    }
    else{
        return error("Incorrect Credential");
    }
}

// Get User Details : Auth Verfy Fnction (Through Auth function)

const get_user_details = async(req)=>{
    // From auth to get userid in req col
    const {userId} = req;
    let find_id = await userModel.findById(userId);
    if(!find_id){
        return null
    }
    else{
        // send specify data in frontend to view in this obj variable
        let obj = {
            name:find_id.username,
            mail:find_id.email
        }
        return obj
    }
}

module.exports = {userCreate,loginCheck,get_user_details};