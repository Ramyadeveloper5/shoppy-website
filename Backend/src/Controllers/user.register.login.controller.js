const userServices = require('../Services/user.register.login.service');
const AuthController = require('../Middlewares/Auth')


// User Create
const user_create_service = async(req,res)=>{
    let data = await userServices.userCreate(req);
    if(!data){
        res.status(400).send({message:"User Already Registered"});
    }
    else{
        res.send({data,success:"Successfully Registered"})
    }
}

// Login Check
const login_verify = async(req,res)=>{
    let login = await userServices.loginCheck(req);
    let token = await AuthController.login_token(login)
    // if login true
    if(login){
        res.send({tokenname:token,Name:login.username,success:"Login Successfully"})
    }
    else{
        res.status(400).send({failed:"Invalid Credentials"})
    }
}

// Login Verify after token genearate through (get_user_details service)

const login_verify_token = async(req,res)=>{
    let data = await userServices.get_user_details(req);
    res.send(data) 
}

module.exports = {user_create_service,login_verify,login_verify_token};