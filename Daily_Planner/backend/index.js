import express from "express";
import config from  "./src/config/config";
const db = require(".src/config db");
import cors from "cors";


const app = express();

db.connect();

app.use(cors());
app.use(express.json());




app.listen(5000, () => console.log("Server running"));
