const express= require('express')
const dotenv= require('dotenv')
const path =require('path');

dotenv.config();
const app=express();
app.use(express.json());

require("./db/connect")

const userLoginRoutes=require(path.join(__dirname,"routes/user_routes"))

app.use(userLoginRoutes)

app.listen(5000,()=>{
    console.log("Backend server is connected on PORT 5000")
})