//Database Connection 
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.Promise = global.Promise;

exports.connect = () => {
    //using local storage (Database) to handle Data Base Management System
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then("Database Connected SuccessFully")
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};