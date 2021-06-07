const jwt=require("jsonwebtoken");
const mongoose=require("mongoose");
const user=require("../model/user");
require("dotenv").config();
module.exports = (req,res,next)=>
{
    const {authorization}=req.headers;
    if(!authorization)
    {
        return res.status(401).json({"message":"You must be logged-in"});
    }
    else
    {
        const token=authorization.replace("Bearer ","");
        jwt.verify(token,process.env.JWT_secret,(err,payload)=>
        {
            if(err)
            {
                return res.status(401).json({"message":"You must be logged-in"});
            }
            const {_id}=payload;
            user.findById(_id).then((userdata)=>
            {
                req.user=userdata;
                next();
            })
        })
    }
}