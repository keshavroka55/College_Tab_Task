const dotenv = require("dotenv");
// import dotenv from "dotenv";
dotenv.config();

const config = {
    PORT: process.env.PORT || 5000,
    Mongodb_url: process.env.Mongodb_url || "mongodb://localhost:27017/dailyplanner",
    jwt_secret: process.env.jwt_secret,
    jwt_expiration: process.env.jwt_expiration,
};

module.exports = config;