const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({

username:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true,
    unique:true
},
read:{
    type:String,
},
duration:{
    type:Number
},
email:{
    type:String,
    required:true,
    unique:true,

},
profilePic:{
    type:String,
    default:"",
},

},
{timestamps:true});

module.exports=mongoose.model("User",UserSchema);