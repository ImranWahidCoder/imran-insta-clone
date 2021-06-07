import {React, useState} from 'react';
import {Link , useHistory} from 'react-router-dom';
import M from 'materialize-css';
const Signin = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history=useHistory();
    const postData=()=>
    {
        fetch("/signin",
        {
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(
            {
                email:email,
                password:password
            })
        }).then(res=>res.json())
        .then(data=>
        {
            console.log(data);
            M.toast({html: data.message});
            history.push("/");
        }).catch(err=>
        {
            console.log(err);
        })
    }
    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>
                <input type="text" placeholder="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" placeholder="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light" onClick={()=>{postData()}}>
                 Signin
                </button>
                <h6> <Link to="/Signup">Don't have an account?</Link> </h6>
            </div>
        </div>
    )
};
export default Signin;