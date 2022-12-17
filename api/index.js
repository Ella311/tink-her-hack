const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const { json } = require("express");


dotenv.config();
app.use(express.json());


mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL,{
useNewUrlParser:true,
useUnifiedTopology:true,
//useCreateIndex:true,


}).then(console.log("connected to DB")).catch(err=>console.log(err))


console.log("welcome to blog site");

app.use("/api/auth",authRoute);
app.listen("5000",()=>{
    console.log("connected to backend")
});
