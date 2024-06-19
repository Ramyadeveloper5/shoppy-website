// Package Importing
const jwt = require('jsonwebtoken');
const {userModel} = require('../Models/user')


// Generate Token : Login

const login_token = async(data)=>{
    // split _id only
    let {_id} = data;
    let token_create = jwt.sign({id:_id},"secret");
    return token_create
}

// Verify Auth

const verify_auth = async(req,res,next)=>{
    try{
        let headers = req.headers;
        // Headers exist or not check
        if(!headers.authorization){
            return res.status(401).send({message:"Missing Authorization Value"})
        }
        let bearer = headers.authorization.split(' ');
        let token = bearer[1];
        // Token exist or not
        if(!token){
            return res.status(401).send({message:"Token missing : Invalid Token"})
        }
        let payload =jwt.verify(token,"secret");
        // Id decreypt
        if(!payload.id){
            return res.status(401).send({message:"Token missing : Invalid Token"})
        }
        // save payload.id into one var name
        let userId = payload.id;
        let find_Id = await userModel.findById(userId);
        // check user id exist or not
        if(!find_Id){
            return res.status(401).send({message:"User Id Not Present"})
        }
        // total data active(user) coloum check 
        if(!find_Id.active){
            return res.status(400).send({message:"User ACtive Status : Disabled"})
        }
        // send user details to frontend
        req.userId = userId;
        next()
    }
    catch(error){
        next(error)
    }
}

module.exports = {login_token,verify_auth};