const mongoose=require("mongoose");
const {ObjectId}=mongoose.Schema.Types;
const postSchema=new mongoose.Schema({
    title:{type:String,required:true},
    body:{type:String,required:true},
    photo:{type:String,required:true},
    postedBy:{type:ObjectId,ref:"user"}
});
const post=new mongoose.model("post",postSchema);
module.exports=post;