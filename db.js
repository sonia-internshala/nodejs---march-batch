import express from "express";
import restaurantRoutes from "./Routes/restaurant.routes.js";
let app=express();

app.use(express.json());

restaurantRoutes(app);

import mongoose from "mongoose";
mongoose.connect('mongodb+srv://soniamalik:MaWPvohTQSfEJqwl@cluster0.3qyvk7g.mongodb.net/')
.then(()=>{
    console.log("Database is successfully connected!")
})
.catch((err)=>{
    console.log(err)
})


let port=5050;

app.listen(port,()=>{
    console.log(`The server is listenning at port ${port}`)
})

//soniamalik
//MaWPvohTQSfEJqwl


