const mongoose=require("mongoose");
//create book schema

const UserSchema=mongoose.Schema(
    {
        // ISBN:String,
        // title:String,
        // author:[Number],
        // language:String,
        // pubDate:String,
        // numOfPage:Number,
        // category:[String],
        // publications:Number,

        userName:String,
        email: String,
      password: String
      
    }
);

const  UserModel=mongoose.model("users", UserSchema);

module.exports= UserModel;