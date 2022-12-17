const mongoose=require("mongoose")

const PostSchema=new mongoose.Schema({

username:{
    type:String,
    required:true,
    unique:true
},
title:{
    type:String,
    required:true,
    unique:true
},
desc:{
    type:String,
},
ratings:{
    type:[Number]
},

img:{
    type:[String],
    //default:"",
},
categories:{
    type:[String],
    required:false,
},

},
{timestamps:true});

module.exports=mongoose.model("Post",PostSchema);