const mongoose = require("mongoose");
require("dotenv").config();

 async function connection(){
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Connection successful");
    }catch(err){
        console.log(err);
    }

}
module.exports = connection;