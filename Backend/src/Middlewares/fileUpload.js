// Package Importing
const multer = require("multer");
const path = require("path");


let count = 0;

const uploadFolder = multer.diskStorage({
    destination: function(req,res,cb){
        cb(null,path.join(__dirname,'../upload/Images'))
    },
    filename:function(req,file,cb){
        let ext = path.extname(file.originalname)
        count++
        cb(null,Date.now()+count.toString()+ext)
    }
});

// Upload File
const upload = multer({
    storage:uploadFolder,
    fileFilter:function(req,file,callback){
        if(
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/web" 
        ){
            callback(null,true)
        }
        else{
            callback(null,false)
        }
    },
    limits:{
        fileSize: 5024 * 5024 * 5
    }
})

module.exports  = {upload}