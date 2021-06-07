const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

const user=require("./model/user");
const post=require("./model/post");

app.listen(port,()=>
{
    console.log(`Running on port ${port}`);
})