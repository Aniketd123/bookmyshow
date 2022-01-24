const mongoose=require("mongoose");
//create book schema

const MoviesSchema=mongoose.Schema(
    {
        // ISBN:String,
        // title:String,
        // author:[Number],
        // language:String,
        // pubDate:String,
        // numOfPage:Number,
        // category:[String],
        // publications:Number,


        image: String,
      title: String,
      actor: String
    }
);

const  MoviesModel=mongoose.model("movies", MoviesSchema);

module.exports= MoviesModel;