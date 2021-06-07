const express=require("express");
const router=express.Router();
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");
const user=require("../model/user");
const requireLogin=require("../middlewares/requireLogin");

router.get("/",(req,res)=>
{
    res.send("hello from server");
})
router.post("/protected",requireLogin,(req,res)=>
{
    res.send("you can now access the protected resource");
})

router.post("/signup",(req,res)=>
{
    const {name,email,password}=req.body;
    if(!name || !email || !password)
    {
        return res.status(422).json({"message":"Please fill all the required fields"});
    }
    else
    {
        user.find({email:email}).then((savedUser)=>
        {
            if(savedUser.length>0)
            {
                console.log(savedUser);
                res.json({"message":"A user already exists with the same email-id"});
            }
            else
            {
                bcrypt.hash(password,10).then(hashedPassword=>
                {
                    const newUser=new user(
                    {
                        name,
                        email,
                        password:hashedPassword
                    });
                    user.insertMany([newUser]).then(savedUser=>
                    {
                        console.log(savedUser);
                    }).catch(err=>
                    {
                        console.log(err);
                    });
                    res.json({"message":"User is successfully added to the database"});
                }).catch(err=>
                {
                    console.log(err);
                });
            }
        }).catch(err=>
        {
            console.log(err);
        });
    }
});

router.post("/signin",(req,res)=>
{
    const {email,password}=req.body;
    if(!email || !password)
    {
        return res.status(422).json({"message":"Please fill all the fields "});
    }
    else
    {
        user.findOne({email:email}).then((savedUser)=>
        {
            if(savedUser==[])
            {
                return res.json({"message":"Invalid email or password"});
            }
            else
            {
                bcrypt.compare(password,savedUser.password).then((doMatch)=>
                {
                    if(doMatch)
                    {
                        const token=jwt.sign({_id:savedUser._id},process.env.JWT_secret);
                        const {_id,name,email}=savedUser;
                        return res.json({"message":"Logged in successfully","token":token,"user":{_id,name,email}});
                    }
                    else
                    {
                        return res.json({"message":"Invalid email or password"});
                    }
                }).catch(err=>
                {
                    console.log(err);
                })
            }
        }).catch(err=>
        {
            console.log(err);
        })
    }
})

module.exports=router;