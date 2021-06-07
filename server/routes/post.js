const mongoose=require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const post=require("../model/post");
const router=require("express").Router();


// rout to get all the post 
router.post("/allpost",requireLogin,(req,res)=>
{
    post.find().populate("postedBy","_id name").then(posts=>
    {
        res.json({posts});
    }).catch(err=>
    {
        console.log(err);
    });
})

// rout to create a post
router.post("/createpost",requireLogin,(req,res)=>
{
    const {title,body,pic}=req.body;
    if(!title || !body || !pic)
    {
        res.status(422).json({"message":"Please fill all the fields"})
    }
    else
    {
        console.log(req.user);
        const newPost=new post(
        {
            title,
            body,
            photo:pic,
            postedBy:req.user
        });
        post.insertMany([newPost]).then(result=>
        {
            res.json({"post":result});
        }).catch(err=>
        {
            console.log(`The error is ${err}`);
            res.json({"error":err});
        })
    }
})

// route to fetch the post made by a particular user
router.post("/mypost",requireLogin,(req,res)=>
{
    post.find({postedBy:req.user._id}).populate("postedBy","_id name").then((savedpost)=>
    {
        res.json({savedpost});
    }).catch(err=>
    {
        console.log(err);
    })
})

module.exports=router;