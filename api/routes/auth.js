const router=require("express").Router();
const User=require('../models/User');
const bcrypt=require('bcrypt');

router.post("/register",async (req,res)=>{

try{
    const salt=await bcrypt.genSalt(10);
    const hashedPass= await bcrypt.hash(req.body.password,salt)

    const newUser=new User({

        username:req.body.username,
        password:hashedPass,
        email:req.body.email,

    });

    const user=await newUser.save();
    res.status(200).json(user);
}
catch(err){
    res.status(500).json(err);
}

})

router.post("/login",async (req,res)=>{

    try{
    const user=await User.findOne({username:req.body.username})
    !user && res.status(400).json("Wrong credentials")
    const validated=await bcrypt.compare(req.body.password,user.password)

        // if(User.password===req.body.password){
        //     validated=true;
        // }

    
    !validated && res.status(400).json("Wrong credentials")
    
    res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err);
    }
    
    
    
    
    })




module.exports=router;