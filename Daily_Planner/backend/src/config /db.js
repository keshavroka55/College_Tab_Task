const mongoose = require("mongoose");
// import mongoose from "mongoose";
const config = require('./config');
const db = {};


db.connect = async () =>{
    try{
        await mongoose.connect(config.Mongodb_url);
        console.log("Database connect successfully.");
    }catch (error){
        console.log("Data connection failed",error)

    }
};

db.disconnect = async () =>{
    try{
        await mongoose.connection.close();
        console.log("Database disconnect successfully.");
    }catch (error){
        console.log("Database disconnect failed.", error)
    }
};

module.exports = db;