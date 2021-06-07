const mongoose=require("mongoose");
require("dotenv").config();
mongoose.connect(`${process.env.connection_url}`,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true})
.then(()=>
{
    console.log(`Successfully connected to the database`);
}).catch(err=>
{
    console.log(`The error is ${err}`);
});

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
});
const user=new mongoose.model("user",userSchema);
module.exports = user;
