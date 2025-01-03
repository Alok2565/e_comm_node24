import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () =>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth)
            {
                navigate("/")
                //console.log("User is logged in");
            }
    })

    const collectData = async()=>{
        console.log(name,email,password);

        let result = await fetch('http://localhost:5000/register',{
            method: 'POST',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type': 'application/json',
                },
        })
        result = await result.json()
        //console.warn(result,)
        localStorage.setItem("user",JSON.stringify(result));
        if(result){
            navigate("/");
            }
    }
    return(
        <div className="container">
            <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input className="inputBox" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button type="button" onClick={collectData} className="input_button">SignUP</button>
            </div>
        </div>
    )
}
export default SignUp;