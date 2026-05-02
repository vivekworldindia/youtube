import dotenv from "dotenv"
dotenv.config({
    path: "./.env"
});

import mongoose from "mongoose";
import connectDB from "./db/index.js";
import {app} from "./app.js"

console.log("ENV CHECK:", process.env.CLOUDINARY_API_KEY);
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`server is running on port ${process.env.PORT ||4000}`)
    })

})
.catch((err)=>{
    console.log("Mongodb connection error",err)
})
// import express from "express";

// const app = express();


// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
//         app.on("error",(err) =>{
//             console.log("Error",err)
//             throw err
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log("App is running on port",process.env.PORT)
//         })
//     } catch (err) {
//         console.log("Error", err)
//         throw err
//     }
// })()