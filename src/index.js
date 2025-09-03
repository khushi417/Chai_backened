// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
// dotenv.config({
//  path:'./env'
// })
import express from "express"
import { DB_NAME } from "./constants.js";
import mongoose from "mongoose";
import connectDB from "./db/index.js";


connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port :${process.env.port}`);
    })
})
.catch((error)=>{
    console.log("MONGI db connection failed !!!",error)
})





/*
const app=express();
(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error",error);
            throw error
        })
        app.listen(process.env.port,()=>{
            console.log(`App is listening in port ${process.env.port}`);
        })
    }
    catch(error){
        console.error("Error",error)
        throw error
    }
})() // immedately execute 
function connectDB(){

}
connectDB()
*/