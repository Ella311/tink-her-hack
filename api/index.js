const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/user");
const postRoute=require("./routes/posts");
const cagRoute=require("./routes/categories");
const multer = require("multer");
const { json } = require("express");
const path = require("path");

dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.set('strictQuery', true);

mongoose.connect(process.env.MONGO_URL,{
useNewUrlParser:true,
useUnifiedTopology:true,
//useCreateIndex:true,


}).then(console.log("connected to DB")).catch(err=>console.log(err))


console.log("welcome to blog site");
//upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });

  const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});


app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",cagRoute);


app.listen("5000",()=>{
    console.log("connected to backend")
});
