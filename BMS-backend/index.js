// const db=require("./database/index.js");
// const url=  "mongodb+srv://aniket:<Itachi>@cluster0.huecj.mongodb.net/BookCompany?retryWrites=true&w=majority"
const express=require('express');
const { json } = require("express");
// const app=express();


var cors = require('cors')
var app = express();
 
app.use(cors())
app.use(express.json());
// const mongoose=require('mongoose');
const { MongoClient } = require('mongodb');


require('dotenv').config()
// const BookModel=require("./database/books");





var mongoose=require('mongoose');


var mongoDB=process.env.MONGODBURI;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>console.log("CONNECTION ESTABLISHED done"));

const MoviesModel=require("./Database/movies");
const UserModel=require("./Database/users");



// =========================================================================================================
app.get("/",async(req,res)=>
{
    const getAllMovies=await MoviesModel.find();
    return res.json("hello bms backend");
})

app.get("/movies",async(req,res)=>
{
    const getAllMovies=await MoviesModel.find();
    return res.json(getAllMovies);
})


app.post("/user-register",async(req,res)=>
{
  const addNewUser=await UserModel.create(req.body);
  return res.json({userAdded:addNewUser,message:" user added succesfully  "});
})



app.listen(5000,()=>{
    console.log("running express");
});