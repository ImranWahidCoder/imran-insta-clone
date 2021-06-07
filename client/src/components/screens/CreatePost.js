import React ,{useState} from 'react';
import {useHistory} from 'react-router-dom';
const CreatePost = () => {
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [image,setImage]=useState("");
    const [url,setUrl]=useState("");
    const postDetails=()=>
    {
        const data=new FormData();
        data.append("file",image);
        data.append("cloud_name","imucloudinsta");
        data.append("upload_preset","insta-clone");
        console.log(data);
        fetch("https://api.cloudinary.com/v1_1/imucloudinsta/image/upload",
        {
            method:"post",
            body:data
        }).then(res=>res.json())
        .then(info=>
        {
            setUrl(data.url);
            console.log(info)
        })
        .catch(err=>{console.log(err)});

        fetch("/createpost",
        {
            method:"post",
            headers:{"Content_Type":"application/json"},
            body:JSON.stringify(
            {
                title,
                body,
                pic:url
            })
        })
    }


    return (
        <div className="card input-filled" style={{ margin: "20px auto", maxWidth: "500px", padding: "20px", textAlign: "center", borderRadius: "20px" }}>
            <h3>Make a post</h3>
            <input type="text" placeholder="Give a title to your post" 
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input type="text" placeholder="Share your feelings" 
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            />
            <div class="file-field input-field">
                <div class="btn">
                    <span>Upload a photo</span>
                    <input type="file" 
                    onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" />
                </div>
            </div>
            <button className="btn waves-effect waves-light #01579b light-blue darken-4" style={{borderRadius:"10px"}} 
            onClick={()=>{postDetails()}}
            >Make post</button>
        </div>
    )
};
export default CreatePost;