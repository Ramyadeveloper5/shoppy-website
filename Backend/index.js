// Importing
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path=require("path");
const cors = require("cors");
const { config } = require("dotenv");
const {router}  = require("./src/Routes/route")
app.use(express.static("./src/upload/Images"))

// Env
require("dotenv").config()

// Port Intialize
const port = process.env.PORT

// Database Url
const url = process.env.DATABASE_URL

// Body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Cors
app.use(cors())

// Db Connection
mongoose.connect(url)
    .then(() => { return console.log("Database Connected Successfully") })
    .catch((e) => { return console.error(e) })


// Endpoints.

// File Uploading
app.use(router);

// Port Run
app.listen(port, () => { return console.log(`Server run on ${port}`) })