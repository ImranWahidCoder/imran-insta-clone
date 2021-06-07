import React, { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import M from 'materialize-css';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history=useHistory();
    const postData=()=>
    {
        fetch("/signup",
        {
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(
            {
                name:name,
                password:password,
                email:email
            })
        }).then(res=>res.json())
        .then(data=>
        {
            M.toast({html: data.message});
            history.push("/signin");
            console.log(data)
        }).catch(err=>
        {
            console.log(err)
        });
    }
    return (
        <div className="mycard">
            <div className="card auth-card">
                <h2>Instagram</h2>
                <input type="text" placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text" placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password" placeholder="Select your passowrd"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light" onClick={()=>postData()}>
                    Signup
                </button>
                <h6> <Link to="/Signin">Already have an account?</Link> </h6>
            </div>
        </div>
    )
};
export default Signup;